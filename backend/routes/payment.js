// import express from "express";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// const verifiedTokens = new Set();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// router.post("/create-order", async (req, res) => {
//   const { name, email, contact } = req.body;

//   if (!name || !email || !contact) {
//     return res.status(400).json({ success: false, message: "All fields are required." });
//   }

//   const options = {
//     amount: 900, // ₹9.00 in paise
//     currency: "INR",
//     receipt: `receipt_order_${Date.now()}`,
//     notes: { name, email, contact },
//   };

//   try {
//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay order response:", order);
//     res.json({ success: true, order });
//   } catch (err) {
//     console.error("❌ Razorpay error object:", err);

//     // If Razorpay returned a response, log it
//     if (err?.response) {
//       console.error("❌ Razorpay error response:", err.response);
//     }

//     res.status(500).json({
//       success: false,
//       message: err?.description || err?.error?.description || "Failed to create order",
//     });
//   }
// });


// // Verify payment
// router.post("/verify-payment", (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;
//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   if (expectedSignature !== razorpay_signature) {
//     return res.status(400).json({ success: false, message: "Invalid payment signature." });
//   }

//   // Payment verified, generate token for success page
//   const token = crypto.randomBytes(16).toString("hex");
//   // Store token for verification
// verifiedTokens.add(token);
//   res.json({ success: true, redirectUrl: `/success?token=${token}` });
// });


// // Verify token (for SuccessPage)
// router.post("/verify-token", (req, res) => {
//   const { token } = req.body;
//   if (!token) return res.status(400).json({ success: false, message: "Token is required" });

//   if (verifiedTokens.has(token)) {
//     // Token valid, optionally remove it if one-time use
//     verifiedTokens.delete(token);
//     return res.json({ success: true });
//   } else {
//     return res.status(400).json({ success: false, message: "Invalid or expired token" });
//   }
// });

// export default router;


import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const RAZORPAY_BASE = "https://api.razorpay.com/v1";

// Helper to create basic auth header
const getAuthHeader = () => {
  const key = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const base64 = Buffer.from(`${key}:${secret}`).toString("base64");
  return `Basic ${base64}`;
};

// Create order
router.post("/create-order", async (req, res) => {
  const { name, email, contact, amount = 900, currency = "INR" } = req.body;

  if (!name || !email || !contact) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const response = await fetch(`${RAZORPAY_BASE}/orders`, {
      method: "POST",
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: `receipt_order_${Date.now()}`,
        notes: { name, email, contact },
      }),
    });

    const order = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ success: false, message: order.error?.description || "Failed to create order" });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error("Razorpay REST API error:", error);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
});

// Verify payment
router.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: "Payment details missing" });
  }

  try {
    // Generate signature and verify
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Invalid payment signature" });
    }

    // Payment verified
    const token = crypto.randomBytes(16).toString("hex");
    res.json({ success: true, redirectUrl: `/success?token=${token}` });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ success: false, message: "Payment verification failed" });
  }
});

export default router;

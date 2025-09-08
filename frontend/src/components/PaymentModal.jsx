import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PaymentModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", contact: "" });
      setError("");
      setLoading(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.email || !formData.contact) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, amount: 900, currency: "INR" }),
        credentials: "include",
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "The Bengal Trader MasterClass",
        description: "Secure Your Seat",
        order_id: data.order.id,
        prefill: formData,
        theme: { color: "#FFC02B" },
        handler: async (response) => {
          const verifyRes = await fetch(`${API_BASE_URL}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success){
            onClose();
             navigate(verifyData.redirectUrl);}
          else setError("Payment verification failed");
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on("payment.failed", (res) => {
        setError(`Payment failed: ${res.error.description}`);
        setLoading(false);
      });
    } catch (err) {
      setError(err.message || "Unexpected error");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="relative w-full max-w-md bg-[#1E1E1E] p-8 rounded-2xl shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <CloseIcon className="w-6 h-6" />
        </button>
        <form onSubmit={handlePayment} className="space-y-6">
          <h3 className="text-white text-2xl font-bold text-center">Register Now</h3>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required className="w-full p-3 bg-[#2A2A2A] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-[#FFC02B]" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="w-full p-3 bg-[#2A2A2A] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-[#FFC02B]" />
          <input type="tel" name="contact" placeholder="Phone" value={formData.contact} onChange={handleInputChange} required className="w-full p-3 bg-[#2A2A2A] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-[#FFC02B]" />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-3 bg-[#FFC02B] font-bold rounded-full hover:bg-yellow-400 disabled:bg-gray-500">
            {loading ? "Processing..." : "Save My Seat ›"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;

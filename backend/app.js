import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import paymentRoutes from './routes/payment.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Allow requests from your frontend origin
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(bodyParser.json());

// Routes
app.use('/api', paymentRoutes);


const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`🚀 Server running on ${PORT}`)
);
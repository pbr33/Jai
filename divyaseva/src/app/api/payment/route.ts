import { NextRequest, NextResponse } from 'next/server';

// Razorpay Payment Integration API
// In production, add your Razorpay API keys in environment variables:
// RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR', receipt, notes } = body;

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // In production, create a Razorpay order like this:
    // const Razorpay = require('razorpay');
    // const instance = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // });
    //
    // const order = await instance.orders.create({
    //   amount: amount * 100, // Razorpay expects amount in paise
    //   currency,
    //   receipt,
    //   notes,
    // });

    // For demo, return a mock order
    const mockOrder = {
      id: `order_${Date.now()}`,
      entity: 'order',
      amount: amount * 100,
      amount_paid: 0,
      amount_due: amount * 100,
      currency,
      receipt: receipt || `rcpt_${Date.now()}`,
      status: 'created',
      notes: notes || {},
    };

    return NextResponse.json(mockOrder);
  } catch {
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'DivyaSeva Payment API',
    supported_methods: ['Razorpay', 'UPI', 'Credit/Debit Cards', 'Net Banking', 'Wallets'],
    currency: 'INR',
    instructions: {
      step1: 'POST to this endpoint with { amount, currency, receipt, notes }',
      step2: 'Use the returned order_id with Razorpay checkout.js on the client',
      step3: 'Verify payment signature on the server after successful payment',
    },
  });
}

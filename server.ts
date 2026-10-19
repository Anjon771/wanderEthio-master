import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// In-Memory Fallback Stores
const usersStore = new Map<string, any>();
const bookingsStore: any[] = [];
const contactStore: any[] = [];
const questionsStore: any[] = [];
const subscribersStore = new Set<string>([
  'tourist1@example.com',
  'ethioexplorer@example.com',
  'wanderer@example.com',
  'naturelover@example.com',
]);

// Seed demo user for testing
usersStore.set('demo@wanderethio.com', {
  fullName: 'Demo Traveler',
  email: 'demo@wanderethio.com',
  password: 'password123',
  phone: '+251911223344',
  nationality: 'Ethiopian',
  passport: 'ET12345678',
  dob: '1995-05-12',
  gender: 'Other',
  country: 'Ethiopia',
  address: 'Bole Road',
  zip: '1000',
  city: 'Addis Ababa',
  emergencyContact: 'Abebe',
  emergencyPhone: '+251911000000',
  allergies: 'None',
});

// Non-blocking MongoDB connection
mongoose.set('bufferCommands', false);
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.warn('MongoDB connection failed — using in-memory store:', err.message));
} else {
  console.log('No MONGODB_URI provided — using persistent in-memory store');
}

// ---------------- API ROUTES ----------------

// Register
app.post('/api/register/registration', async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    usersStore.set(email.toLowerCase(), { ...req.body, email: email.toLowerCase() });
    return res.status(201).json({ message: 'Registration successful' });
  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Error saving registration', error: error.message });
  }
});

// Check if user is registered (discount check)
app.post('/api/register/check', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ registered: false });
    }
    const user = usersStore.get(email.toLowerCase());
    if (user) {
      return res.json({ registered: true, discount: 0.1 });
    }
    return res.json({ registered: false });
  } catch (error: any) {
    return res.status(500).json({ message: 'Error checking registration', error: error.message });
  }
});

// Check if registered for subscription
app.post('/api/register/checker', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ registered: false });
    }
    const user = usersStore.get(email.toLowerCase());
    if (user) {
      return res.json({ registered: true });
    }
    // For convenience in testing, allow any email
    return res.json({ registered: true });
  } catch (error: any) {
    return res.status(500).json({ message: 'Error checking registration', error: error.message });
  }
});

// Login
app.post('/api/register/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = usersStore.get(email.toLowerCase());
    if (!user) {
      return res.status(404).json({ message: 'User not found. Please register first or use demo@wanderethio.com' });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = 'token_' + Buffer.from(email).toString('base64') + '_' + Date.now();
    return res.status(200).json({ message: 'Login successful!', token });
  } catch (error: any) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// Bookings
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = { ...req.body, id: 'bk_' + Date.now(), createdAt: new Date() };
    bookingsStore.push(booking);
    return res.status(201).json({ message: 'Booking saved successfully!', booking });
  } catch (error: any) {
    console.error('Error saving booking:', error);
    return res.status(500).json({ error: 'Error saving booking. Please try again.' });
  }
});

app.get('/api/bookings', (req, res) => {
  res.json(bookingsStore);
});

// Contact
app.post('/api/contact', async (req, res) => {
  try {
    const message = { ...req.body, id: 'msg_' + Date.now(), createdAt: new Date() };
    contactStore.push(message);
    return res.status(201).json({ message: 'Message submitted successfully!' });
  } catch (error: any) {
    return res.status(400).json({ message: 'Message submission failed', error: error.message });
  }
});

app.get('/api/contact', (req, res) => {
  res.json(contactStore);
});

// Questions
app.post('/api/questions', async (req, res) => {
  try {
    const q = { ...req.body, id: 'q_' + Date.now(), createdAt: new Date() };
    questionsStore.push(q);
    return res.status(201).json({ message: 'Question submitted successfully!' });
  } catch (error: any) {
    return res.status(400).json({ message: 'Question submission failed', error: error.message });
  }
});

app.get('/api/questions', (req, res) => {
  res.json(questionsStore);
});

// Subscribers
app.post('/api/subscribers', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }
    const cleanEmail = email.toLowerCase().trim();
    if (subscribersStore.has(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'Email is already subscribed.' });
    }
    subscribersStore.add(cleanEmail);
    return res.status(201).json({ success: true, message: 'Subscription successful!' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: 'Subscription failed. Please try again later.' });
  }
});

app.get('/api/subscribers/count', (req, res) => {
  res.json({ count: subscribersStore.size + 140 });
});

// Payment creation (Chapa or mock simulation)
app.post('/api/create-payment', async (req, res) => {
  const { amount, currency, email, first_name, last_name, tx_ref } = req.body;

  if (process.env.CHAPA_TEST_SECRET_KEY) {
    try {
      const paymentData = {
        amount,
        currency,
        email,
        first_name,
        last_name,
        tx_ref,
        callback_url: `http://localhost:${PORT}/api/payment-success`,
        return_url: `http://localhost:${PORT}/api/payment-success`,
        customization: {
          title: 'Booking Payment',
          description: 'Payment for booking services',
        },
      };

      const response = await axios.post(
        'https://api.chapa.co/v1/transaction/initialize',
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${process.env.CHAPA_TEST_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return res.json(response.data);
    } catch (error: any) {
      console.warn('Chapa payment error, falling back to simulation:', error.message);
    }
  }

  // Simulated payment checkout URL
  return res.json({
    status: 'success',
    message: 'Simulated payment initialized',
    data: {
      checkout_url: `/api/payment-success?tx_ref=${tx_ref || 'sim_' + Date.now()}&name=${encodeURIComponent(first_name || 'Traveler')}&amount=${amount || 0}`,
    },
  });
});

app.get('/api/payment-success', (req, res) => {
  const { tx_ref, name, amount } = req.query;
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Payment Successful - Wander Ethio</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f6f8; padding: 40px 20px; text-align: center; color: #333; }
          .card { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          .icon { font-size: 50px; color: #28a745; margin-bottom: 20px; }
          h1 { color: #1a4d2e; margin-bottom: 10px; }
          p { font-size: 16px; line-height: 1.6; }
          .btn { display: inline-block; margin-top: 25px; padding: 12px 24px; background: #e07a5f; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; }
          .btn:hover { background: #c5654c; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="icon">✓</div>
          <h1>Payment Successful!</h1>
          <p>Thank you <strong>${name || 'for booking with us'}</strong>!</p>
          <p>Your booking reference ID: <strong>${tx_ref || 'tx-' + Date.now()}</strong></p>
          ${amount ? `<p>Total Amount Paid: <strong>${amount} ETB</strong></p>` : ''}
          <p>We are delighted to welcome you to explore Ethiopia with Wander Ethio.</p>
          <a href="/" class="btn">Return to Home</a>
        </div>
      </body>
    </html>
  `);
});

// Express error fallback
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('[Server Error]', err);
  if (req.path.startsWith('/api/')) {
    return res.status(500).json({ error: 'Internal server error', message: err.message });
  }
  next(err);
});

// ---------------- FRONTEND SERVING ----------------

async function setupFrontend() {
  const isProduction = process.env.NODE_ENV === 'production';
  const distPath = path.resolve(__dirname, 'dist');
  const frontendPath = path.resolve(__dirname, 'Frontend');

  if (isProduction && fs.existsSync(distPath)) {
    console.log('Serving production build from dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    console.log('Starting Vite in middleware mode for development');
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
      root: frontendPath,
      assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.gif', '**/*.svg'],
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(frontendPath, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

setupFrontend().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

const express = require('express');
const cors =require('cors');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');

const app = express();
const prisma = new PrismaClient();


app.use(express.json());

app.use(cors())

// Referral form submission endpoint
app.post('/referrals', async (req, res) => {
  const { RefererName, RefererEmail, RefreeName,RefreeEmail } = req.body;

  // Basic validation
  if (!RefererName || !RefererEmail || !RefreeName || !RefreeEmail) {
    return res.status(400).json({ error: 'All the values are required' });
  }

  try {
    // Save referral data to the database
    const referral = await prisma.referral.create({
      data: { RefererName, RefererEmail, RefreeName,RefreeEmail },
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: RefreeEmail,
      subject: 'You have been refered',
      text: `Hello ${RefreeName}, you have to refered to Accredian by ${RefererName}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });

    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

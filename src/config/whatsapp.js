// WhatsApp Booking Configuration for Livzo Resort Diwali Utsav

export const WHATSAPP_PHONE = '919929867684';
export const WHATSAPP_DISPLAY_PHONE = '+91 99298 67684';

export const WHATSAPP_BOOKING_MESSAGE = 
`🪔 *Namaste Livzo Resort Team!* 🪔

I would like to book the *Diwali Utsav Celebration Package* at Livzo Resort.

✨ *Package Selected:* Diwali Festive Getaway
💰 *Festive Offer:* ₹2,560 / Person (20% OFF Applied)
🍽️ *Inclusions:* 1-Night Luxury Stay, Royal Lunch, Festive High-Tea, Grand Diwali Dinner & Breakfast

📋 *My Booking Details:*
• *Full Name:* 
• *Check-in Date:* 
• *Total Guests (Adults / Kids):* 
• *Preferred Accommodation:* Luxury Tent / Resort Cottage

💳 Please share your *UPI QR Scanner / Payment Code* and bank details so I can complete the advance payment and confirm our reservation.

Looking forward to a wonderful Diwali celebration with you! ✨`;

export const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_BOOKING_MESSAGE)}`;

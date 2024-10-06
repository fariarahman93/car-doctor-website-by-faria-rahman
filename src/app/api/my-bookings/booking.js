// src/pages/api/my-bookings/booking.js
import { connectDB } from '@/lib/dbConnect'; // Adjust the path if necessary
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { method } = req;

  await connectDB(); // Connect to the database

  switch (method) {
    case 'DELETE':
      const { id } = req.query; // Get the booking ID from the query

      try {
        const db = await connectDB();
        const result = await db.collection('bookings').deleteOne({ _id: new ObjectId(id) });
        
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Booking not found.' });
        }
        
        res.status(200).json({ message: 'Booking deleted successfully.' });
      } catch (error) {
        res.status(500).json({ message: 'An error occurred.', error });
      }
      break;

    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

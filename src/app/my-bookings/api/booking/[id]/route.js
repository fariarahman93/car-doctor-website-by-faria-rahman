import { connectDB } from "@/lib/connectDB"; // Adjust the path according to your project structure
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Handle DELETE requests to remove a booking by ID
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id), // Ensure params.id is passed correctly
    });

    if (resp.deletedCount === 0) {
      return NextResponse.json({ message: "Booking not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Booking deleted successfully.", response: resp });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
};

// Handle other HTTP methods if necessary
export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updateDoc = await request.json();

  try {
    const resp = await bookingsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: { ...updateDoc },
      },
      { upsert: true }
    );

    return NextResponse.json({ message: "Booking updated successfully.", response: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });

    if (!resp) {
      return NextResponse.json({ message: "Booking not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Booking found", data: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
};

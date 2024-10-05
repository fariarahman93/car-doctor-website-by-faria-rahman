// import { connectDB } from "@/lib/connectDB"

// export const GET = async () => {
//     const db = connectDB()
//     const servicesCollection = db.collection('services')

//     try{
//     await servicesCollection.deleteMany();
//     const resp = await servicesCollection.insertMany(services);
//     return Response.json({message:"seeded successfully"})
//     }catch (error) {
//         console.log(error);
//     }
// }
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { promises as fs } from 'fs'; // Import Node's fs to read the JSON file
import path from 'path'; // Import path to resolve file paths

export const GET = async () => {
  try {
    // Define the path to the services.json file in the public folder
    const filePath = path.join(process.cwd(), 'public', 'services.json');
    
    // Read the JSON file
    const fileData = await fs.readFile(filePath, 'utf-8');
    
    // Parse the JSON data
    const services = JSON.parse(fileData);

    // Connect to the database
    const db = await connectDB();
    
    // Get the 'services' collection (MongoDB creates it automatically if it doesn't exist)
    const servicesCollection = db.collection("services");
    
    // Clear existing data in the 'services' collection
    await servicesCollection.deleteMany({});
    
    // Insert the JSON data into the services collection
    const resp = await servicesCollection.insertMany(services);
    
    // Return a success response
    return NextResponse.json({ message: "Seeded successfully", data: resp });
  } catch (error) {
    console.error("Error seeding data:", error);
    
    // Return an error response if something goes wrong
    return NextResponse.json(
      { message: "Error occurred while seeding", error: error.message },
      { status: 500 }
    );
  }
};

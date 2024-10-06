import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 text-black">
      <div className="container mx-auto px-4 bg-rose-600 text-white">
        <h1 className="text-4xl font-bold text-center mb-8 ">Car Servicing Insights</h1>
        <p className="text-lg text-center mb-12">
          Your go-to resource for tips, advice, and everything related to car servicing and maintenance.
        </p>

        {/* Blog Posts Section */}
        <div className="space-y-8 text-black">
          {/* Blog Post 1 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">The Importance of Regular Oil Changes</h2>
            <p>
              Regular oil changes are vital for your car’s performance and longevity. Learn how often you should change your oil and what type is best for your vehicle.
            </p>
         
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Top 5 Signs Your Brakes Need Attention</h2>
            <p>
              Don’t ignore the warning signs of brake issues! Discover the top indicators that your brakes may need servicing to ensure your safety on the road.
            </p>
           
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Understanding Tire Maintenance and Care</h2>
            <p>
              Tires are crucial for safe driving. Learn about tire rotation, balancing, and when to replace your tires for optimal performance.
            </p>
            
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 text-black">
          <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <div className="bg-white border rounded-lg p-6 shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">1. How can I tell if my car needs a service?</h3>
            <p>Common indicators include unusual noises, warning lights on the dashboard, or a decrease in performance. If in doubt, consult a professional!</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">2. How long does a typical service take?</h3>
            <p>Most standard services take about 1 to 2 hours, depending on the type of service required and the vehicle model.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">3. What should I bring for my car service appointment?</h3>
            <p>It’s helpful to bring your vehicle's service history and any warning lights or issues you've noticed, along with your insurance details.</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 text-black">
          <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Our Services?</h2>
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <p>
              Our commitment to excellence sets us apart in the car servicing industry. Here’s why we are the best choice for your vehicle:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Skilled professionals dedicated to quality service.</li>
              <li>State-of-the-art equipment to handle all service needs.</li>
              <li>Commitment to using OEM or high-quality aftermarket parts.</li>
              <li>Flexible scheduling options to suit your busy lifestyle.</li>
              <li>Transparent communication and service updates throughout the process.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 text-black">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-rose-600 p-6">
          <h1 className="text-4xl text-white font-bold text-center">Contact Us</h1>
        </header>

        {/* Contact Information */}
        <section className="p-8">
          <h2 className="text-2xl font-semibold mb-4">How to Reach Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’re always here to answer any of your questions about our services, pricing, or to help you schedule a car service appointment. Below, you’ll find all the details you need to contact us or stop by in person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">Call: (123) 456-7890</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">Email: contact@affordablecarservice.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p className="text-gray-600">123 Main Street, Saskatoon, SK, Canada</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Hours of Operation</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM <br />
                Saturday: 9:00 AM - 4:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) */}
        <section className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">What services do you offer?</h3>
              <p className="text-gray-600">
                We offer a wide range of car services including oil changes, brake repair, tire rotations, engine diagnostics, and more. Visit our services page for full details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">How do I schedule an appointment?</h3>
              <p className="text-gray-600">
                You can schedule an appointment by giving us a call or through our online booking system. We recommend booking in advance to ensure availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Do you offer same-day service?</h3>
              <p className="text-gray-600">
                Yes, we offer same-day service for certain repairs and maintenance, depending on availability. Give us a call to check for openings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Where are you located?</h3>
              <p className="text-gray-600">
                We are conveniently located at 123 Main Street, Saskatoon, SK. Check the map below for directions.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Find Us on the Map</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            {/* Replace the src below with your actual Google Maps embed link */}
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.8025441930156!2d-106.65365468469214!3d37.774929279758655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482c77fbefc98f9%3A0xdd1443c7e4562546!2s123%20Main%20St%2C%20Saskatoon%2C%20SK!5e0!3m2!1sen!2sca!4v1623209542978!5m2!1sen!2sca"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        
      </div>
    </div>
  );
}

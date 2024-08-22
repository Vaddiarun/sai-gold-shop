import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const phoneNumber = "+917989272421";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-gray-100 flex flex-col items-center justify-center py-12">
      <h1 className="text-5xl font-extrabold mb-12 text-yellow-700">
        Contact Us
      </h1>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Location
        </h2>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31169.273970494377!2d76.850389!3d14.711500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692854871987!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg border-4 border-yellow-500"
          ></iframe>
        </div>
      </div>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h2>
        <p className="text-xl text-gray-700 mb-4">Phone: {phoneNumber}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-200"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

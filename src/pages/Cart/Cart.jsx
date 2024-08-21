import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  decreaseQuantity,
} from "../../redux/Category/CartSlice"; // Import actions
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHandPointDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [errors, setErrors] = useState({});

  const { cartitems } = useSelector((state) => state.cart); // Access cartitems
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeCartItem(item.id));
    toast.success(`${item.name} removed successfully`);
  };

  const handleRemovedecrise = (item) => {
    dispatch(decreaseQuantity(item.id));
    toast.success(`${item.name} quantity decreased successfully`);
  };

  const handleSubmittovender = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!contactNumber) newErrors.contactNumber = "Contact number is required";
    if (contactNumber && !/^\d{10}$/.test(contactNumber))
      newErrors.contactNumber = "Contact number must be 10 digits";

    if (Object.keys(newErrors).length === 0) {
      // Prepare cart items data
      const cartDetails = cartitems
        .map((item) => `- ${item.name} (Quantity: ${item.quantity})`)
        .join("\n");

      // Prepare WhatsApp message
      const message = `Hi, I am interested in your services. Here are my details:\n\nName: ${name}\nContact Number: ${contactNumber}\n\nCart Details:\n${cartDetails}`;
      const phoneNumber = "7989759695"; // Replace with your WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappURL, "_blank");

      // Show success toast
      toast.success("Vendor will contact you soon...");

      // Reset form
      setName("");
      setContactNumber("");
      setShow(false); // Hide the form after submission
    } else {
      setErrors(newErrors);
    }
  };

  const handlesubmit = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1>
      {cartitems.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="https://www.pngitem.com/pimgs/m/480-4803503_your-cart-is-currently-empty-empty-cart-icon.png"
            alt="Empty Cart"
            className="w-42 h-42 mb-4"
          />
          <p>Your cart is empty</p>
          <FaHandPointDown className="w-12 h-12 mt-3" />
          <h1 className="font-bold">
            <Link to="/">Click Here to shop now</Link>
          </h1>
        </div>
      ) : (
        <div>
          {cartitems.map((item) => (
            <React.Fragment key={item.id}>
              <div className="border border-gray-300 bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemovedecrise(item)} // Decrease quantity
                    className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-1 px-3 rounded-lg mr-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemove(item)} // Pass function reference for removing item
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))}

          {/* Contact Form Button */}
          <button
            onClick={handlesubmit}
            className="ml-5 mb-3 bg-green-400 hover:bg-green-500 text-white font-semibold py-1 px-3 rounded-lg block mx-auto"
          >
            Click Here To Get Call From Our Side
          </button>

          {/* Contact Form */}
          {show && (
            <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmittovender}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="contactNumber"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.contactNumber ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your contact number"
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-xs italic">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

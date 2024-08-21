import React from "react";
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
  const { cartitems } = useSelector((state) => state.cart); // Access cartitems
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeCartItem(item.id));
    toast.success(`${item.name} Removed Sucesssfully`);
  };

  const handleRemovedecrise = (item) => {
    dispatch(decreaseQuantity(item.id));
    toast.success(`${item.name} decrease Sucesssfully`);
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
            {" "}
            <Link to="/"> Click Here to shop now</Link>
          </h1>
        </div>
      ) : (
        cartitems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between"
          >
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
        ))
      )}
    </div>
  );
}

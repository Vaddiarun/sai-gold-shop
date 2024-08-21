import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { featchCategory } from "../../redux/Category/CategorySlice"; // Fetch products
import { addToCart } from "../../redux/Category/CartSlice"; // Add to Cart action
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const { cartitems } = useSelector((state) => state.cart);
  const { id } = useParams(); // Get the category id from the URL
  const { products } = useSelector((state) => state.products); // Get products from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchCategory()); // Fetch products based on the category
  }, [dispatch, id]);

  // Add to cart handler
  const handlebuttonClick = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`); // Custom success message
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className="flex justify-end mr-2">
        {/* Toast Container with custom position and auto close duration */}
        <ToastContainer position="top-right" autoClose={3000} />
        {cartitems.length > 0 ? (
          <div className="fixed top-30 right-1  z-50">
            <Link
              to="/cart"
              className="flex items-center space-x-2 bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg"
            >
              <AiOutlineShoppingCart className="w-6 h-6" />
              <span className="text-lg font-semibold">{cartitems.length}</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((each) => each.category === id) // Filter products by category
            .map((each) => (
              <div
                key={each.id}
                className="border border-yellow-300 bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
              >
                {/* Product Image */}
                <img
                  src={each.image_url}
                  alt={each.name}
                  className="w-full h-64 object-contain rounded-md mb-4"
                />
                {/* Product Name */}
                <h1 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {each.name}
                </h1>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handlebuttonClick(each)} // Pass the entire product object
                  className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

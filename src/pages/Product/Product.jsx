import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { featchCategory } from "../../redux/Category/CategorySlice"; // corrected typo

export default function Product() {
  const { id } = useParams();

  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchCategory()); // calling the function and passing the id
  }, [dispatch, id]); // including 'id' in the dependency array
  console.log(products);
  return (
    <div className="w-full h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((each) => each.category === id)
            .map((each) => (
              <div
                key={each.id}
                className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
              >
                <img
                  src={each.image_url}
                  alt={each.name}
                  className="w-full h-64 object-contain rounded-md mb-4"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {each.name}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

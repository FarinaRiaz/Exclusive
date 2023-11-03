import React from "react";
import { Button } from "../button";
import Product from "../../pages/ProductFile";
import { useDispatch } from "react-redux";
import { addToCart } from "../../pages/Cartslice";

const Banner2 = () => {
  const dispatch = useDispatch();
  const handlemoveToAll = () => {
    Product.map((item) => {
      dispatch(addToCart(item));
    });
  };

  return (
    <div className="w-full h-fit p-3 mt-14 ">
      <div className="flex text-lg font-semibold ml-12 items-center relative">
        <h1 className="text-xl">{`Total Products(${Product.length})`}</h1>
        <div className="right-6 absolute border-2 border-neutral-100 rounded">
          <Button variant="cartall" size="large" onClick={handlemoveToAll}>
            Move All To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Banner2;

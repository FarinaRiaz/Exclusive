import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "./Cartslice";

import DownloadReceipt from "../components/DownloadReceipt";
import Header from "../components/Header";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const searchItem = useSelector((state) => state.cart.search);

  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.newPrice * item.quantity;
    });
    return subtotal;
  };

  const subtotal = calculateSubtotal();

  return (
    <>
      <Header />

      <Navbar />
      <div className=" pl-20 pr-20 absolute bottom-0 right-0 mb-4 mr-4 z-10"></div>
      <hr />
      <div className="ml-20 ">
        <div className="mt-12 pb-[80px]">
          <Link to="/home" className="text-stone-500 text-xl font-normal">
            Home /
          </Link>
          <Link to="/cart" className="text-black text-xl font-normal ml-1.5">
            Cart
          </Link>
        </div>
        <div className="w-[1170px] h-[72px] shadow-md pt-[24px] pb-[24px] pl-[40px] pr-[39px] ">
          <div className="grid grid-cols-4 ml-4 gap-[284px]">
            <span className="font-medium">Product</span>
            <span className="font-medium">Price</span>
            <span className="font-medium">Quantity</span>
            <span className="font-medium">Subtotal</span>
          </div>
        </div>
        <div className="flex-column justify-[flex-start] items-[flex-start] gap-[40px] display-[flex]">
          {cart
            .filter((pro) =>
              searchItem
                ? pro.title.toLowerCase().includes(searchItem.toLowerCase())
                : true
            )
            .map((data) => (
              <div className="w-[1170px] h-[102px] relative grid grid-cols-4 mt-8 shadow-sm pt-[24px] pb-[24px] pl-[40px] pr-[39px] shadow-md">
                <div className="flex" key={data.id}>
                  <img
                    src={data.image}
                    alt=""
                    className="flex ml-3 w-[50px] h-[39px]"
                  />
                  <span className="text-base mr-3 mt-2 ml-2 font-normal">
                    {data.title}
                  </span>
                </div>
                <div className="flex ml-20 mt-3  gap-[284px]">
                  ${data.newPrice}
                </div>

                <div className="flex justify-center h-12 w-fit border-2 border-stone-300 rounded   ml-36">
                  <div className=" rounded">
                    <input
                      type="number"
                      className="h-full w-fit ml-4 rounded placeholder-gray-500 hover-none outline-none mr-2"
                      placeholder="0"
                      min={1}
                      max={10}
                      value={data.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        if (
                          !isNaN(newQuantity) &&
                          newQuantity >= 1 &&
                          newQuantity <= 10
                        ) {
                          if (newQuantity > data.quantity) {
                            dispatch(increaseItemQuantity(data.id));
                          } else if (newQuantity < data.quantity) {
                            dispatch(decreaseItemQuantity(data.id));
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/*SUbtotal*/}
                <div className="flex  mt-3 justify-end mr-5 ">
                  ${data.newPrice * data.quantity}
                </div>
                <div className="absolute left-10 mt-5 w-fit ">
                  <button
                    className="bg-red-500 w-6 rounded-full opacity-0 hover:opacity-100"
                    onClick={() => dispatch(removeItem(data.id))}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="flex">
          <div className="border  mt-12 w-fit relative">
            <Button variant="cartall" size="large">
              <Link to="/productpage">Return To Products</Link>
            </Button>
          </div>
          <div className="border mt-12 w-fit absolute right-20">
            <Button
              variant="cartall"
              size="large"
              onClick={() => dispatch(clearCart())}
            >
              Remove All
            </Button>
          </div>
        </div>
        <DownloadReceipt subtotal={subtotal} />
      </div>
    </>
  );
};
export default Cart;

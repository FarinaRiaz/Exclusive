import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "./Cartslice";
import { AiTwotoneDelete } from "react-icons/ai";
import DownloadReceipt from "../components/DownloadReceipt";

// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import Product from "../pages/ProductFile";

const Cart = () => {
  const { cart, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <div className="mt-12 ml-12">
          <Link to="/home" className="text-black text-xl font-normal">
            Home/
          </Link>
          <Link to="/cart" className="text-black text-xl font-bold">
            Cart
          </Link>
        </div>
        <div className="p-8 shadow-lg ml-12 mr-12 mt-10">
          <div className="grid grid-cols-4">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </div>
        <div>
          {cart.map((data) => (
            <div className=" relative grid grid-cols-4 flex p-8 shadow-lg ">
              <div className="flex" key={data.id}>
                <img src={data.image} alt="" className="flex ml-3 w-24 h-16" />
                <span className="text-xs mt-8 ml-3">{data.title}</span>
              </div>
              <div className="flex ml-3 mt-8">{data.newPrice}</div>
              <div className="flex justify-center w-24 h-12 ">
                {/* <div className="bg-slate-300 rounded">
                  <input
                    className="bg-slate-300 h-full w-16 ml-4 rounded placeholder-gray-500"
                    placeholder="0"
                  />
                </div>
                <div className="absolute grid grid-row right-0.5 top-1.5 gap-1">
                  <button>
                    <FaAngleUp />
                  </button>
                  <button>
                    <FaAngleDown />
                  </button>
                </div> */}

                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span class="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    value={data.quantity}
                  ></input>
                  <button
                    data-action="increment"
                    class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="flex ml-3 mt-8">{totalPrice}</div>
              <div className="mt-12 w-fit absolute right-12">
                <Button
                  variant="cartall"
                  size="large"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  <AiTwotoneDelete className="w-20 h-6 fill-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="border ml-12 mt-12 w-fit relative">
            <Button variant="cartall" size="large">
              <Link to="/productpage">Return To Products</Link>
            </Button>
          </div>
          <div className="border mt-12 w-fit absolute right-12">
            <Button
              variant="cartall"
              size="large"
              onClick={() => dispatch(clearCart())}
            >
              Remove All
            </Button>
          </div>
        </div>
        <DownloadReceipt />
      </div>
    </>
  );
};
export default Cart;

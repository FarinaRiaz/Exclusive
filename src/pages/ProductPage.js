import React from "react";
// import Product from "../pages/ProductFile";
import image1 from "../Assets/heart small.png";
import { Button } from "../components/button";
import Navbar from "../components/Navbar";
import Banner2 from "../components/Banner2";
import { addToCart, addheart } from "./Cartslice";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";

const ProductPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.cart.search);

  return (
    <>
      <Header />

      <Navbar />
      <div className=" pl-20 pr-20 absolute bottom-0 right-0 mb-4 mr-4 z-10"></div>
      <hr />
      <div className="ml-10 ">
        <Banner2 />

        <div className=" flex-column justify-[flex-start] items-[flex-start]  display-[inline-flex] ml-3 mr-6">
          <div className="grid grid-cols-4 justify-[flex-start] items-[flex-start] gap-[16px] display-[inline-flex]">
            {items
              .filter((pro) =>
                searchItem
                  ? pro.title.toLowerCase().includes(searchItem.toLowerCase())
                  : true
              )
              .map((product) => (
                <div key={product.id} className=" mb-6 mt-6 ">
                  <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] ">
                    <div
                      className={`px-3 py-1 left-[12px] top-[12px] absolute  rounded justify-center items-center gap-2.5 inline-flex ${
                        product.text === "NEW"
                          ? "bg-[#00FF66]"
                          : product.discountInPercentage === "0"
                          ? "bg-transparent"
                          : "bg-[#DB4444]"
                      }`}
                    >
                      {/* discount */}
                      <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px] ">
                        {product.text === "NEW"
                          ? "NEW"
                          : product.discountInPercentage === "0"
                          ? ""
                          : product.discountInPercentage}
                      </div>
                    </div>
                    <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[34px] h-[34px] relative">
                        <button
                          className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full flex justify-center"
                          onClick={() => dispatch(addheart(product))}
                        >
                          <img src={image1} alt="" className="mt-1.5" />
                        </button>
                      </div>
                    </div>
                    {/* image */}
                    <div className="relative w-[190px] h-[180px] pl-[9px] pr-[9px] pt-[14px] pb-[14px] left-10 top-10 absolute justify-center items-center inline-flex">
                      <img
                        className="w-[172px] h-[152px]"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute bottom-0">
                      <Button
                        variant="cart"
                        size="large"
                        className="w-[270px] h-[40px]  font-bold text-white text-lg"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>

                  <div className="flex-col justify-start items-start gap-2 flex w-[270px] mt-3">
                    {/* title */}
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                      {product.title}
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                      {/* newprice */}
                      <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                        ${product.newPrice}
                      </div>
                      {/* oldprice */}
                      <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                        {product.oldPrice}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;

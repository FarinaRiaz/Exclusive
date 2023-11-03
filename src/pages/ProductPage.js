import React from "react";
// import Product from "../pages/ProductFile";
import image1 from "../Assets/heart small.png";
import { Button } from "../components/button";
import Navbar from "../components/Navbar";
import Banner2 from "../components/Banner2";
import { addToCart, addheart } from "./Cartslice";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Banner2 />
      <div className="flex  ml-8">
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 flex justify-center">
          {items.map((product) => (
            <div key={product.id} className=" mb-6 mt-6   w-[322px] p-2">
              <div className="w-[270px] h-[250px] relative bg-neutral-100  ml-5">
                <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  {/* discount */}
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                    {product.discountInPercentage}
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
                <div className="w-[190px] h-[180px] px-[9px] py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
                  <img
                    className="w-[172px] h-[152px]"
                    src={product.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="mb-3 flex justify-center ml-0.5">
                <Button
                  variant="cart"
                  size="large"
                  className="w-[270px]"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Cart
                </Button>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex ml-5">
                {/* title */}
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                  {product.title}
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  {/* newprice */}
                  <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                    {product.newPrice}
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
    </>
  );
};
export default ProductPage;

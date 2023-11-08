import React from "react";
import Product from "../pages/ProductFile";
import image1 from "../Assets/heart small.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addheart } from "../pages/Cartslice";
const ProductCard = () => {
  const searchItem = useSelector((state) => state.cart.search);
  const dispatch = useDispatch();
  const handleAddHeart = (item) => {
    dispatch(addheart(item));
  };
  return (
    <>
      <div className="w-[100%]  justify-[flex-start] items-[flex-start]  display-[inline-flex]">
        <div className="grid grid-cols-4 justify-[flex-start] items-[flex-start] gap-[16px] display-[inline-flex]">
          {Product.slice(0, 4)
            .filter((pro) =>
              searchItem
                ? pro.title.toLowerCase().includes(searchItem.toLowerCase())
                : true
            )
            .map((product) => (
              <div key={product.id} className=" mb-6 mt-6 ">
                <div className="w-[270px] h-[250px] relative bg-[#F5F5F5] ">
                  <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    {/* discount */}
                    <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                      {product.discountInPercentage}
                    </div>
                  </div>
                  <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                      <div className="w-6 h-6 left-[5px] top-[5px] absolute">
                        <img
                          src={image1}
                          alt=""
                          className="flex justify-center "
                          onClick={() => handleAddHeart(product)}
                        />
                      </div>
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
                  <div className="absolute  flex justify-center bottom-2 ">
                    <button
                      className="w-[270px] h-[30px] font-bold text-white text-lg"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>

                <div className="flex-col justify-start items-start gap-2 flex w-[270px]">
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
    </>
  );
};
export default ProductCard;

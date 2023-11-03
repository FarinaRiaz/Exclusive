import React from "react";
import image1 from "../../Assets/appleimg.png";
import image2 from "../../Assets/banner.png";
import image3 from "../../Assets/icons arrow-right.png";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function Banner() {
  return (
    <>
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        > */}
      <div className=" mt-16 w-screen h-[344px]  bg-black">
        <div className="relative">
          <img
            className="w-[496px] h-[325px] ml-[396px] top-[16px] absolute"
            src={image2}
            alt="image2"
          />
          <div className="left-[64px] top-[58px] absolute justify-start items-center gap-6 inline-flex">
            <img src={image1} className="w-10 h-[49px]" alt="image1" />
            <div className="w-[126px] h-5 text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              iPhone 14 Series
            </div>
          </div>
          <div className="w-[250px] h-[120px] left-[70px] top-[127px] absolute text-neutral-50 text-4xl font-semibold font-['Inter'] leading-[60px] tracking-widest">
            Up to 10% off Voucher
          </div>
          <div className="left-[67px] top-[269px] absolute justify-start items-center gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-center text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
                Shop Now
              </div>
              <div className="w-[81px] h-[0px] border border-neutral-50"></div>
            </div>
            <img src={image3} alt="" className="flex" />
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
      {/* </Masonry>
      </ResponsiveMasonry> */}
    </>
  );
}
export default Banner;

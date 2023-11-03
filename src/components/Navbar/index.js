import React from "react";
import { useSelector } from "react-redux";
import image1 from "../../Assets/cartimg.png";
import image2 from "../../Assets/heart small.png";
import { Link } from "react-router-dom";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function Navbar() {
  const items = useSelector((state) => state.cart.cart);
  const item = useSelector((state) => state.cart.favi);
  return (
    <>
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        > */}
      <nav className="flex justify-between bg-white text-black max-w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a className="hover:text-gray-200" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="/productpage">
                Products
              </a>
            </li>
          </ul>
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className=" mr-6 relative ">
              <input
                type="search"
                id="default-search"
                className="block w-64 p-3 text-sm text-gray-900  rounded-lg bg-neutral-100 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you looking for?"
                required
              />
              <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none ">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokewidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
          <div className="hidden xl:flex items-center space-x-5 ">
            <div className="flex items-center hover:text-gray-200">
              <Link to="/">
                <img src={image2} alt="" className="" />
              </Link>
              <span className="flex absolute top-6 ml-4">
                <span className=" inline-flex justify-center rounded-full w-6 h-6 bg-red-600">
                  <div className="text-black ">{item.length}</div>
                </span>
              </span>
            </div>
            <div className="flex items-center hover:text-gray-200">
              <Link to="/cart">
                <img src={image1} alt="" className="" />
              </Link>
              <span className="flex absolute top-6 ml-4">
                <span className="inline-flex justify-center rounded-full w-6 h-6 bg-red-600">
                  <div className="text-black ">{items.length}</div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10"></div>
      <hr />
      {/* </Masonry>
      </ResponsiveMasonry> */}
    </>
  );
}
export default Navbar;

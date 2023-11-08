import React from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../../Assets/cartimg.png";
import image2 from "../../Assets/heart small.png";
import { Link, NavLink } from "react-router-dom";
import { searchBar } from "../../pages/Cartslice";
import { FaSistrix } from "react-icons/fa";

function Navbar() {
  const items = useSelector((state) => state.cart.cart);
  const item = useSelector((state) => state.cart.favi);
  const search = useSelector((state) => state.cart.search);
  const dispatch = useDispatch();
  const searchItem = (items) => {
    dispatch(searchBar(items));
    // console.log("Items to be searched", items);
  };

  return (
    <>
      <nav className="flex justify-between bg-white text-black max-w-screen ml-8 mr-12">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <NavLink
                exact
                to="/home"
                className=" active:underline active:underline-gray-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productpage"
                className=" active:underline active:underline-gray-900"
              >
                Products
              </NavLink>
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
                className="w-64 h-10  px-3 bg-[#F5F5F5] rounded placeholder-text-gray-700"
                placeholder="What are you looking for?"
                required
                value={search}
                onChange={(e) => searchItem(e.target.value)}
              />

              <div className="absolute right-0.5 top-2.5">
                <button className="  ">
                  <FaSistrix className="w-12 h-6" />
                </button>
              </div>
            </div>
          </form>
          <div className=" hidden xl:flex items-center space-x-5 ">
            <div className=" relative flex items-center hover:text-gray-200">
              <Link to="/">
                <img src={image2} alt="" className="" />
              </Link>
              <span className="flex absolute bottom-3  ml-4">
                <span className=" inline-flex justify-center rounded-full w-6 h-6 bg-red-600">
                  <div className="text-black ">{item.length}</div>
                </span>
              </span>
            </div>
            <div className="relative flex items-center hover:text-gray-200">
              <Link to="/cart">
                <img src={image1} alt="" className="" />
              </Link>
              <span className="flex absolute bottom-3 ml-4">
                <span className="inline-flex justify-center rounded-full w-6 h-6 bg-red-600">
                  <div className="text-black ">{items.length}</div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

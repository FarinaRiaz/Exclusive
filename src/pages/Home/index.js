import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProductCard from "../../components/ProductCard";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => {
  // const [propage, setproPage] = useState(false);
  // const handleClick = () => {
  //   setproPage(true);
  // };
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 1 }}>
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Header />

          <Navbar />
          <div className=" pl-20 pr-20 absolute bottom-0 right-0 mb-4 mr-4 z-10"></div>
          <hr />
          <div className="ml-20 mr-20">
            <Banner />
            <ProductCard />
            <div className="flex justify-center mt-20 mb-20">
              <Button
                variant="danger"
                size="large"
                className="w-48 h-16 rounded"
                // onClick={handleClick}
              >
                <Link to="/productpage">View All Products</Link>
              </Button>
            </div>
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default Home;


import { Link, useParams } from "react-router";
import { RootState } from "../../states/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductsAsync } from "../../states/products/productsSlice";
import { RxChevronLeft } from "react-icons/rx";
import { MdOutlineStar, MdStar } from "react-icons/md";
import { useAppDispatch } from "../../states/store/store";

export default function ProductDetails() {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const { id } = useParams();

  type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  const fetchedProducts = useSelector(
    (state: RootState) => state.fetchProducts.value
  );
  const dispatch = useAppDispatch();

  // if there are products in fetchedProdcuts then they are set to filteredProducts
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (fetchedProducts && id) {
      const product = fetchedProducts.find((product: any) => product.id == id);
      setCurrentProduct(product || null);
    }
  }, [fetchedProducts, id]);

  return (
    <>
      {currentProduct?.rating ? (
        <div className="text-wingman-textcolor min-h-[100vh] bg-wingman-primary">
          <div className="w-full flex items-center h-14 mt-20 bg-wingman-secondary px-10">
            <Link to={"/"}>
              <div className="flex items-center justify-center text-wingman-setPrimary font-bold">
                <RxChevronLeft size={25} />
                <h2>Back To Results</h2>
              </div>
            </Link>
          </div>
          <div className="h-full w-full flex justify-center gap-16 p-10">
            <div>
              <img
                src={currentProduct.image}
                alt={currentProduct.image}
                className="sm:w-[600px]"
              />
            </div>
            <div className="flex flex-col gap-4 max-w-[500px]">
              <h2 className="text-3xl font-bold">{currentProduct.title}</h2>
              <div className="flex gap-4  items-center">
                <div className="flex">
                  {[...Array(5)].map((_, index) => {
                    return currentProduct.rating.rate > index ? (
                      <MdOutlineStar size={35} key={index} />
                    ) : (
                      <MdStar size={35} key={index} />
                    );
                  })}
                </div>
                <h2>{currentProduct.rating.rate}</h2>
                <h2>{`(${currentProduct.rating.count})`}</h2>
              </div>
              <div>
                <h2 className="font-bold text-3xl">{`$${currentProduct.price}`}</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full text-7xl font-bold">Loading</div>
      )}
    </>
  );
}

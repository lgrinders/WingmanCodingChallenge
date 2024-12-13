

import { useSelector } from "react-redux";
import { RootState } from "../../states/store/store";
import { fetchProductsAsync } from "../../states/products/productsSlice";
import { setFilteredProducts } from "../../states/filteredProducts/filteredProductsSlice";
import { useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import { useAppDispatch } from "../../states/store/store";


export default function ProductsContainer() {
  // fetchedProducts state
  const fetchedProducts = useSelector(
    (state: RootState) => state.fetchProducts.value
  );
  // filteredProductsState
  const filteredProducts = useSelector(
    (state: RootState) => state.filteredProducts.value
  );
  const dispatch = useAppDispatch();

  // triggers original products fetch
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  // if there are products in fetchedProdcuts then they are set to filteredProducts
  useEffect(() => {
    if (fetchedProducts.length > 0) {
      dispatch(setFilteredProducts(fetchedProducts));
    }
  }, [fetchedProducts, dispatch]);

  return (
    <>
      <div className="w-screen bg-wingman-secondary p-4 flex justify-center min-h-screen">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {/* maping out the filteredProducts */}
            {filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  img={product.image}
                  id={product.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <h2 className="text-7xl text-wingman-primary font-bold">
              No Matches
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

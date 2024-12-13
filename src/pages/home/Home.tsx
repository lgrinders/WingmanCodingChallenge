import ProductsContainer from "../../components/productsContainer/ProductsContainer";
import SearchInputSection from "../../components/searchInputSection/SearchInputSection";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden font-custom">
        <SearchInputSection />
        <ProductsContainer />
      </div>
    </>
  );
}



import { useDispatch } from "react-redux";
import { filterProducts } from "../../../states/filteredProducts/filteredProductsSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  // filters products based on user input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterProducts(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        className="w-[550px] min-w-[50px] rounded-r-none bg-neutral-50 outline-2 outline-wingman-secondary h-10 rounded-md px-3 outline-none"
        placeholder="Search For Items"
        onChange={handleSearchChange}
      />
    </>
  );
}

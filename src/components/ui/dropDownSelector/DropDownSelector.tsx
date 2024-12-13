

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { categoryProducts } from "../../../states/filteredProducts/filteredProductsSlice";

export default function DropDownSelector() {
  const [selectedOption, setSelectedOption] = useState("");
  const [dropDownShowing, setDropDownShowing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const dropDownOptions = [
    "Reset",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  // handle selected category
  const handleSelectedCategory = (category: string) => {
    const newCategory = category === "Reset" ? "" : category;
    setSelectedOption(newCategory);
    dispatch(categoryProducts(newCategory)); // dispatch action directly
    setDropDownShowing(false);
  };

  // when clicking outside of the ref the dropdown will close
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        !(e.target instanceof Node) ||
        ref.current.contains(e.target)
      ) {
        return;
      }
      setDropDownShowing(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);

  return (
    <div className="flex flex-col items-center relative">
      <div ref={ref} className="relative sm:w-48 w-28 sm:text-lg text-xs">
        <div
          onClick={() => setDropDownShowing(!dropDownShowing)}
          className="w-28 sm:w-48 rounded-md rounded-l-none h-12 text-white bg-wingman-secondary flex items-center justify-center hover:bg-emerald-800 cursor-pointer"
        >
          {selectedOption === "" ? "Sort" : selectedOption}
        </div>

        {dropDownShowing && (
          <div className="absolute top-full mt-1 w-28 sm:w-48 shadow-lg">
            {dropDownOptions.map((category, idx) => (
              <div
                key={idx}
                className="shadow-2xl text-white first-of-type:rounded-t-md bg-wingman-secondary hover:bg-emerald-800 last-of-type:rounded-b-md border-t-neutral-50 first-of-type:border-t-0 border-t w-full h-12 flex items-center justify-center cursor-pointer"
                onClick={() => handleSelectedCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

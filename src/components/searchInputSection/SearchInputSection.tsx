import DropDownSelector from "../ui/dropDownSelector/DropDownSelector";
import SearchBar from "../ui/searchBar/SearchBar";

export default function SearchInputSection() {
  return (
    <>
      <div className="w-screen py-20 px-10 mt-16 flex items-center justify-center bg-wingman-primary">
        <SearchBar />
        <DropDownSelector />
      </div>
    </>
  );
}

import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="bg-white border rounded-xl flex overflow-hidden">

      <input
        type="text"
        placeholder="Search jobs..."
        className="flex-1 px-4 py-3 outline-none"
      />

      <button className="bg-blue-600 text-white px-5">
        <Search size={20} />
      </button>

    </div>
  );
}

export default SearchBar;
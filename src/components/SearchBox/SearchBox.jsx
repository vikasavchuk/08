import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { IoMdSearch } from "react-icons/io";
import { changeFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filter.name);
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input 
       value={selectNameFilter}
       onChange={handleSearch}
       className={css.searchImp}
       type="text"
      />
      <IoMdSearch className={css.iconSearch} />
    </div>
  );
};

export default SearchBox;
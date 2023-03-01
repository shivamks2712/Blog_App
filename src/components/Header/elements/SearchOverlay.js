import { MdClose } from "react-icons/md";
import clsx from "clsx";
import { getStoreItems } from "../../../axiosCall/onLoad";
import { getStoreLists } from "../../../axiosCall/onLoad";
import { useDispatch } from "react-redux";
import { setShops } from "../../../store/slices/shop-slice";
import { setItems } from "../../../store/slices/item-slice";
import { useRouter } from "next/router";

const SearchOverlay = ({ activeStatus, getActiveStatus, searchDisplay }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { shopId } = router.query;

  return (
    <div className={clsx("search-overlay", activeStatus && "active")}>
      {/*=======  close icon  =======*/}
      <button
        className="search-overlay__close-icon"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      >
        <MdClose />
      </button>
      {/*=======  End of close icon  =======*/}
      {/*=======  search overlay content  =======*/}
      <div className="search-overlay__content">
        <form
          className="space-mb--20"
          onSubmit={(e) => {
            e.preventDefault();
            getActiveStatus(false);
            let search = document.getElementById("searchHolder").value;
            if (searchDisplay == 1) getStoreLists(dispatch, setShops, search);
            else getStoreItems(shopId, setItems, dispatch, search);
            document.getElementById("searchHolder").value = "";
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <input
            type="search"
            placeholder="Search Products..."
            id="searchHolder"
          />
        </form>
        <div className="search-overlay__hint"># Hit enter to search</div>
      </div>
      {/*=======  End of search overlay content  =======*/}
    </div>
  );
};

export default SearchOverlay;

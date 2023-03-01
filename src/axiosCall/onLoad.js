import axios from "./axios";
import cogoToast from "@hasanm95/cogo-toast";

// First time Load functions

export const loadPageTransationId = async (setShops, dispatch) => {
  await axios
    .get("/transaction_id")
    .then((res) => {
      const t_id = res.data.data.transaction_id;
      localStorage.setItem("transaction_id", t_id);
      getStoreLists(dispatch, setShops, "");
    })
    .catch((err) => console.log(err));
};

export const getStoreLists = async (dispatch, setShops, search) => {
  let t_id = localStorage.getItem("transaction_id");
  t_id = "16ce6eb5-d5e7-4c36-97f1-fe27386ad9d3";
  console.log(search);

  await axios
    .get(
      `/store/nearby?transaction_id=${t_id}&limit=20&offset=0&search=${search}&firebase_id=8808435978`
    )
    .then((res) => {
      const shops = res.data.data.rows;
      if (shops && shops.length > 0) dispatch(setShops(shops));
      else cogoToast.error("No Store Found", { position: "bottom-left" });
    })
    .catch((err) => console.log(err));
};

export const getStoreItems = async (storeId, setProducts, dispatch, search) => {
  let t_id = localStorage.getItem("transaction_id");
  t_id = "16ce6eb5-d5e7-4c36-97f1-fe27386ad9d3";
  await axios
    .get(
      `/store/item/nearby?transaction_id=${t_id}&storeLocation_id=${storeId}&search=${search}&limit=20&offset=0`
    )
    .then((res) => {
      if (res.data.data.length) dispatch(setProducts(res.data.data));
      else cogoToast.error("No Items Found", { position: "bottom-left" });
    })
    .catch((err) => console.log(err));
};

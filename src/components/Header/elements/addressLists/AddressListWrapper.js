import AddressList from "./AddressList";
import { useSelector } from "react-redux";

const AddressListWrapper = () => {
  const { addressItems } = useSelector((state) => state.address);
  // console.log(addressItems);
  return (
    <div className="addressListWrapper mt-2">
      {addressItems && addressItems.length >= 1
        ? addressItems.map((address, i) => (
            <AddressList address={address} key={i} />
          ))
        : ""}
    </div>
  );
};

export default AddressListWrapper;

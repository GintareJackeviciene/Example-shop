import axios from "axios";
import { baseBeUrl } from "../../helper";
import { useAuthContext } from "../../store/AuthCtxProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function BuyItemButton({ itemId, customerId }) {
  const navigate = useNavigate();

  const {token} = useAuthContext();

 const buyItem = async () => {

sendAxiosData ({
  item_id: itemId,
  customer_id: customerId
})
 };

function sendAxiosData (data) {
axios
.post(`${baseBeUrl}orders`, data, {
  headers: {'Authorization': token}
})
.then((response) => {
  toast.success(response?.message || 'Order was created successfully!');
  navigate('/', {replace: true})
})
.catch((error) => {
  toast.error(error.response.data.error);
})
}
  return (
    <button
    className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={buyItem}
    >

      Buy item
    </button>
  );
}

import { useContext } from "react"
import { useHistory } from "react-router-dom";
import { CartContext } from "../App"
import './Cart_Row_Item.css'
const Cart_Row_Item = (props) => {
    const history = useHistory();

    const { addItem, DecreaseItem, removeItem } = useContext(CartContext);
    return (
        <tr>
            <td className="td"> {props.identity} </td>

            <td className="">

                <span className="tdCustom">
                    <img onClick={(e) => {
                        history.push(`/product/${props.identity}`);
                    }} src={props.imgSrc} style={{ height: "40px" }} />
                    {props.name}
                </span>
            </td>


            <td className="td"> 15x28.8g </td>
            <td className="td"> <b>{props.qty}</b> </td>
            <td className="td">
                <img className="pointer" onClick={() => addItem(props.identity)} src="http://trolley.ae/catalog/view/theme/default/image/add-to-cart.png"></img>
                <img className="pointer" onClick={() => { DecreaseItem(props.identity) }} src="http://trolley.ae/catalog/view/theme/default/image/remove-from-cart.png"></img>
                <img className="pointer" onClick={() => { removeItem(props.identity) }} src="http://trolley.ae/catalog/view/theme/default/image/list_remove_btn.png"></img>
            </td>
            <td className="td"> <b>
                {props.price}
            </b> </td>
            <td className="td"> <b> {props.qty * props.price}</b>  </td>

        </tr>
    )

}
export default Cart_Row_Item;
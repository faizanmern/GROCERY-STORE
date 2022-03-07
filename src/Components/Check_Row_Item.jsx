import { useContext } from "react"
import { useHistory } from "react-router-dom";
import { CartContext } from "../App"
import './Cart_Row_Item.css'
const Check_Row_Item = (props) => {
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
            <td className="td"> <b>
                {props.price}
            </b> </td>
            <td className="td"> <b> {props.qty * props.price}</b>  </td>

        </tr>
        
    )

}
export default Check_Row_Item;
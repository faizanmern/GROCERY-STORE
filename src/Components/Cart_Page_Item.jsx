import { useContext } from "react";
import { CartContext } from "../App";
import './cart_page_item.css'
const Cart_Page_Item = (props)=>
{
    const { removeItem,addItem,DecreaseItem}  = useContext(CartContext)

    return(
        <div className="col-lg-6">
        <div className="row">
        <h5>{props.name}</h5>
        <div className="col-lg-4 text-center col-6">
            <div className="contaner-fluid polaroid">
                <img src={props.imgSrc} />
            </div>
        </div>
        <div className="col-lg-6  col-6">
            <div className="row">
                <div> Category: <span>DEF</span> </div>
                <div className="bold "> Unit Price : <span className="left" >{props.price}</span> </div>
                <div className="bold"> Quantiry :<span className="left"> {props.qty} </span> </div>
                <div className="bold"> Price  :<span className="left"> {props.qty * props.price }  </span> </div>
                
                <div >
                    <button onClick={() => addItem(props.identity)} className="btn btn-success m-1">+</button>
                    <button onClick={() => { DecreaseItem(props.identity) } } className="btn btn-warning m-1 ">-</button>
                    <button onClick={() => removeItem(props.identity)} className="btn btn-outline-danger m-1 ">Remove</button>
                </div>
            </div>
        </div>

        </div>
        
    </div>

    )
}
export default Cart_Page_Item;
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../App";

const Cart_Item = (props) => 
{ 
    const {addItem,DecreaseItem,removeItem} = useContext(CartContext);
    const history = useHistory()
    return (
        <div>
            <div className="container-fluid polaroid" >
                <div className="div">
                    <div className="row">
                        {/* <div className=" offset-2 col-6">

                            <img style={{height:"80px"}} onClick={(e) => {
                                history.push(`/product/${props.identity}`);
                            }} src={props.imgSrc} />
                        </div> */}
                        <div style={{fontSize:"80%"}}>
                                {props.name}
                        </div>
                        {/* <div className=" col-1 mar "> */}
                            <div className="act_buttons">

                            <img className="pointer" onClick={() => addItem(props.identity) } src="http://trolley.ae/catalog/view/theme/default/image/add-to-cart.png"></img>
                            <img className="pointer" onClick={() => {  DecreaseItem(props.identity) }} src="http://trolley.ae/catalog/view/theme/default/image/remove-from-cart.png"></img>
                            <img className="pointer" onClick={() => {  removeItem(props.identity) }} src="http://trolley.ae/catalog/view/theme/default/image/list_remove_btn.png"></img>
                           
                            </div>
                        {/* </div> */}
                        <div className="col-10 offset-2">
                        <h6>Quantity <span > {props.qty} </span> </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart_Item;
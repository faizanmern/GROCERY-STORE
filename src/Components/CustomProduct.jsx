import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../App";
import './Item.css';
import './Product_1.css'
const CustomProduct = (props) => {



    const { removeItem, addItem, DecreaseItem } = useContext(CartContext)
    const history = useHistory();
    return (
        <div className="over">
            <div className="container-fluid polaroid ht " style={{ backgroundColor: "#FFF" }}>
            <div className="div " style={{ marginTop: "5%" }}>
                <div className="row ">
                    <div className="col-lg-12  col-xs-12 box text-center" >

                        <img src={props.imgSrc}  />
                        {
                            props.qty > 0 && <div className="text" style={{ zIndex: "9" }}>
                                <h1 className="m-5">{props.qty}</h1>
                            </div>

                        }
                    </div>
                    <div className="button_1">
                        <div className="row">
                            <div className="col-6 center">
                                <img className="pointer" onClick={() => addItem(props.identity)} src="http://trolley.ae/catalog/view/theme/default/image/add-to-cart.png"></img>

                            </div>
                            <div className="col-6 center">

                                <img className="pointer" onClick={() => { DecreaseItem(props.identity) }} src="http://trolley.ae/catalog/view/theme/default/image/remove-from-cart.png"></img>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container-fluid detail">
                <div className="price text-center">
                    <b>
                        <del style={{ marginRight: "1rem" }}>
                            {props.deletedPrice}
                        </del>
                        {props.price}
                    </b>
                </div>
                <div className="desc text-center">
                    {props.desc}
                </div>
            </div>
        </div>
    

        </div>
    )
}
export default CustomProduct;
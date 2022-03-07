import { useHistory } from "react-router-dom";

const Category =(props)=>
{
    const history = useHistory();
    return(
        <span className="" >
            <img style={{float:"left"}} src={props.imgSrc} onClick={ ()=> history.push(`/category/${props.identiy}`)}>
            </img>
            <div className="text-center category_tag" >{props.name}</div>
        </span>
    )

}
export default Category;
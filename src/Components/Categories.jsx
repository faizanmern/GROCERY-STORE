import categoryData from "../test/category_data";
import Category from "./Category";
import './category.css'
const Categories = ({ id }) => {
    return (
        <div className="polaroid " style={{ clear: "both" }}>
            <div className="row m-1 ">
                {
                    categoryData.map((item) => 
                        {
                            if (id == item.id)
                                return <div key={item.id} className="col-3 col-sm-3 col-md-2  col-lg-1 pointer bordered custom_category " style={{ backgroundColor: "#d4dee1" }}>
                                    <Category identiy={item.id} key={item.id} imgSrc={item.imgSrc} name={item.name} />
                                </div>

                            else {
                                return <div key={item.id} className="col-3 col-sm-3 col-md-2  col-lg-1 pointer bordered custom_category" >
                                    <Category identiy={item.id} key={item.id} imgSrc={item.imgSrc} name={item.name} />
                                </div>

                            }
                        }
                    )
                }
            </div>
        </div>
    )
}
export default Categories;
import { Link } from "react-router"
import useProducts from "../hooks/useProducts"

const ProductList = () => {
    
    const {products} = useProducts()

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col offset-2">
                    <h1>Listado de producto</h1>
                </div>
                <div className="row">
                    {products.map(item => (
                        <div 
                            key={item.id}
                            className="col-4"
                        >
                            <Link to={`/product_details/${item.id}`}>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default ProductList;

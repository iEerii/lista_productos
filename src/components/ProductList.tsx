import { Link } from "react-router"
import useProducts from "../hooks/useProducts"
import { formatCurrency } from "../helpers"

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
                            className="col-sm-12 col-md-6 p-5"
                        >
                            <Link className="text-decoration-none" to={`/product_details/${item.id}`}>
                                <div className="d-flex flex-column align-items-center">
                                    <img className="pb-3" src={item.image} alt={item.title} width="100" />
                                    <p className="text-center fs-4 text text-dark fw-bold">{item.title}</p>
                                    <p className="fs-5 text text-dark fw-bolder">{formatCurrency(item.price)}</p>
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

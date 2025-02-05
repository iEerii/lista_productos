import { useParams } from "react-router"
import useProduct from "../hooks/useProducts"
import { ProductType } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
	let {id} = useParams()

	const { products } = useProduct()
	const [product, setProduct] = useState<ProductType>()

	useEffect(() => {
		const getProduct = async() => {
			const response = await axios(`https://fakestoreapi.com/products/${id}`)
			setProduct(response.data);
		}
		getProduct()
	}, [])

	// Convertir id a número y buscar el producto
    const productData = products.find((p) => p.id === Number(id));

    if (!productData) {
        return <p>Cargando o producto no encontrado...</p>;
    }

  	return (
		<div className="row">
			<div className="col-12">
				<h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <img src={product?.image} alt={product?.title} width="200" />
                <p>Precio: ${product?.price}</p>
                <p>Categoría: {product?.category}</p>
			</div>
		</div>
	)
}

export default Product

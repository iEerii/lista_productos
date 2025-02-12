import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { ProductType } from "../types";
import { formatCurrency } from "../helpers";
import useProduct from "../hooks/useProducts"

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
			<div className="col-sm-2 offset-md-2 mt-5">
				<img src={product?.image} alt={product?.title} width="200" />
			</div>
			<div className="col-sm-4 mt-5">
				<p className="fs-3 fw-bolder">{product?.title}</p>
                <p className="fw-bold">{formatCurrency(product?.price ?? 0)}</p>
                <p>{product?.description}</p>
				<div className="d-flex justify-content-end pt-2">
					<button 
						className="p-2 bg-dark text-light fw-bold border-0"
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product

import { useEffect, useState } from "react"
import { ProductType } from "../types"
import axios from 'axios'

export default function useProducts() {

    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const getProducts = async() => {
            const productUrl = await axios('https://fakestoreapi.com/products')
            setProducts(productUrl.data)
        };
        getProducts();
    }, [])

    return {
        products
    }
}

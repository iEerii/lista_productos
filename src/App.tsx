import { Routes, Route } from "react-router"
import ProductList from "./components/ProductList"
import Product from "./components/Product"

function App() {
	return (
		<Routes>
			<Route path="/" element={<ProductList />}  />
			<Route path="/product_details/:id" element={<Product />} />
		</Routes>
	)
}

export default App

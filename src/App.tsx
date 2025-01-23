import { Routes, Route } from "react-router"
import ProductList from "./components/ProductList"
import DetailsProduct from "./components/DetailsProduct"

function App() {
	return (
		<Routes>
			<Route path="/" element={<ProductList />}  />
			<Route path="/details" element={<DetailsProduct />} />
		</Routes>
	)
}

export default App

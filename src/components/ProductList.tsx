const productos = [
    {
    id: 1,
    nombre: 'tennis',
    },
    {
    id: 2,
    nombre: 'tennis2',
    },
    {
    id: 3,
    nombre: 'tennis3',
    },
    {
    id: 4,
    nombre: 'tennis4',
    },
]

const ProductList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-2">
                    <h1>Listado de productos</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-2">
                    <div className="row">
                    {productos.map(producto => (
                        <div key={producto.id} className="col-6"> 
                            <p className="bg-warning text-white">Columna1</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
		</div>
    );
}
 
export default ProductList;

import { useEffect, useState } from "react"
import { ProductList } from "./ProductList"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { productService } from "../services/product.service"
import { addProduct, loadProducts } from "../store/action/product.action"

export function ProductIndex() {


    const productsPerPage = 6
    const [currentPage, setCurrentPage] = useState(1)

    const products = useSelector(
        (storeState) => storeState.productModule.products
    )

    useEffect(() => {
        try {
            loadProducts()

        } catch (err) {
            console.log('err:', err)
            showErrorMsg('Cannot load toys')
        }

    }, [])

    async function onAddToCart(product) {
        addToCart(product)
        showSuccessMsg('Added to Cart')
    }
    async function onAddProduct() {

        const product = productService.getDemoProduct()
        try {
            const savedProduct = await addProduct(product)
            showSuccessMsg(`Product added (id: ${savedProduct._id})`)
        } catch (err) {
            showErrorMsg('Cannot add product')
        }
    }
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    )

    const totalPages = Math.ceil(products.length / productsPerPage)


    return (
        <div className="products">
            <button onClick={() => onAddProduct()}>+</button>
            <ProductList products={currentProducts} onAddToCart={onAddToCart} />

            <div className="pagination">
                <button
                    onClick={() =>
                        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                    }
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{`${currentPage} / ${totalPages}`}</span>
                <button
                    onClick={() =>
                        setCurrentPage((prevPage) =>
                            Math.min(prevPage + 1, totalPages)
                        )
                    }
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
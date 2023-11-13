import { useEffect } from "react"
import { ProductList } from "./ProductList"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { productService } from "../services/product.service"
import { loadProducts } from "../store/action/product.action"

export function ProductIndex(){

    const products = useSelector(storeState => storeState.productModule.products)

    useEffect(() => {
        try {
              loadProducts()
            
        } catch (err) {
            console.log('err:', err)
            showErrorMsg('Cannot load toys')
        }
      
    }, [])

    async function onAddToCart(product){
        addToCart(car)
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


return(
    <div className="products">
        <button onClick={onAddProduct}>+</button>
        <ProductList
        products={products}
        onAddToCart={onAddToCart}
        />

    </div>
)

}
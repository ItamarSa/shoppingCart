import { useEffect } from "react"

export function ProductIndex(){

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
        <ProductList
        onAddToCart={onAddToCart}
        />

    </div>
)

}
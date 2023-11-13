export function ProductPreview({onAddToCart, product,onRemoveFromCart}) {
    const isCartPage = location.pathname === "/cart"
    const isIndexPage = location.pathname === "/"

    return (
        <section className="product-card">
            <div className="product-details-container">
                <div className="product-img">
                    <img src={product?.imgUrl} alt="product img" />
                </div>
                <div className="product-details">
                    <p className="product-title">{product.title}</p>
                    <p className="product-price">{product.price}$</p>
                </div>
                {isCartPage && <button onClick={() => onRemoveFromCart(product._id)}>❌</button>}
                {isIndexPage && <button onClick={() => onAddToCart(product)}>➕</button> }
                
            </div>

        </section>
    )
}
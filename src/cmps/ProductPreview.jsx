export function ProductPreview(onAddToCart, product) {
    return (
        <section className="product-card">
            <div className="product-details-container">
                <div className="product-img">
                    <img src={product.imgUrl} alt="product img" />
                </div>
                <div className="product-details">
                    <p className="product-title"></p>
                    <p className="product-price"></p>
                    <p className="product-title"></p>
                </div>
                <button className="cart-btn" onClick={onAddToCart()}></button>


            </div>

        </section>
    )
}
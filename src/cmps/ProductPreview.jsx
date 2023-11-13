export function ProductPreview({onAddToCart, product}) {
    console.log('product:', product)
    return (
        <section className="product-card">
            <div className="product-details-container">
                <div className="product-img">
                    <img src={product.imgUrl} alt="product img" />
                </div>
                <div className="product-details">
                    <p className="product-title">{product.title}</p>
                    <p className="product-price">{product.price}$</p>
                </div>
                {/* <button className="cart-btn" onClick={onAddToCart()}>❤</button> */}


            </div>

        </section>
    )
}
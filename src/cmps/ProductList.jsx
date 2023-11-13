import { ProductPreview } from "./ProductPreview";

export function ProductList({onAddToCart,products}){
return(
    <>  
    <div className="list">
        <div className="amount">product available{products?.length}

        </div>

    </div>
    <ul className='product-list'>
                {products?.map(product =>
                    <li className='product-preview' key={product._id}>
                        <ProductPreview
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    </li>)
                }
            </ul>
    </>
)




}
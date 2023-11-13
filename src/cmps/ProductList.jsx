import { utilService } from "../services/util.service";
import { ProductPreview } from "./ProductPreview";

export function ProductList({onAddToCart,products,onRemoveFromCart}){
return(
    <>  
    <div className="list">
        {/* <div className="amount">product available{products?.length}

        </div> */}

    </div>
    <ul className='product-list'>
                {products?.map(product =>
                    <li className='product-preview' key={utilService.makeId()}>
                        <ProductPreview
                            product={product}
                            onAddToCart={onAddToCart}
                            onRemoveFromCart={onRemoveFromCart}
                        />
                    </li>)
                }
            </ul>
    </>
)




}
import { NavLink } from "react-router-dom";
import { SET_CART_IS_SHOWN } from "../store/reducer/product.reducer";
import { useDispatch, useSelector } from "react-redux";

const homeSymbol = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M12.773 14.5H3.227a.692.692 0 0 1-.482-.194.652.652 0 0 1-.2-.468V7.884H.5l7.041-6.212a.694.694 0 0 1 .918 0L15.5 7.884h-2.046v5.954a.652.652 0 0 1-.2.468.692.692 0 0 1-.481.194Zm-4.091-1.323h3.409V6.664L8 3.056 3.91 6.664v6.513h3.408v-3.97h1.364v3.97Z"></path></svg>

export function AppHeader() {
    const dispatch = useDispatch()
    const isCartShown = useSelector(storeState => storeState.isCartShown)
    // const count = useSelector(storeState => storeState.count)

    // function changeCount(diff) {
    //     dispatch({type:'CHANGE_BY', diff})
    // }



    return (
        <>
            <header className="main-header">
                <NavLink className="btn" title="home" to="/">{homeSymbol}</NavLink>
                <NavLink className="btn" title="about" to="/about">ABOUT US</NavLink>
                <NavLink className="btn" title="contact" to="/contact">CONTACT US</NavLink>
                <NavLink className="btn" title="cart" to="/cart" onClick={() => {
                        dispatch({ type: SET_CART_IS_SHOWN, isCartShown: !isCartShown })
                    }}>
                        🛒 Cart
                </NavLink>
            </header>
            <img src="assets/img/mallImg.jpg" alt="mall-img" />
        </>
    )
}
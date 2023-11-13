import { productService } from "../../services/product.service"
// import { RESET_FILTER_BY } from "../action/product.action"

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const UNDO_REMOVE_PRODUCT = 'UNDO_REMOVE_PRODUCT'

export const SET_FILTER = 'SET_FILTER'

export const ADD_ORDER = 'ADD_ORDER'

export const SET_CART_IS_SHOWN = 'SET_CART_IS_SHOWN'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'



const initialState = {
    products: [],
    orders: [],
    cart: [],
    lastRemovedProduct: null,
    // filterBy: productService.getDefaultFilter()
}

export function productReducer(state = initialState, action) {
    var newState = state
    var products
    var cart

    switch (action.type) {
        case SET_PRODUCTS:
            newState = { ...state, products: action.products }
            break
        case REMOVE_PRODUCT:
            const lastRemovedProduct = state.products.find(product => product._id === action.productId)
            products = state.products.filter(product => product._id !== action.productId)
            newState = { ...state, products, lastRemovedProduct }
            break
        case ADD_PRODUCT:
            newState = { ...state, products: [...state.products, action.product] }
            break
        case UPDATE_PRODUCT:
            products = state.products.map(product => (product._id === action.product._id) ? action.product : product)
            newState = { ...state, products }
            break
        case UNDO_REMOVE_PRODUCT:
            if (state.lastRemovedProduct) {
                newState = { ...state, products: [...state.products, state.lastRemovedProduct], lastRemovedProduct: null }
            }
            break
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }

            // case RESET_FILTER_BY:
            //     // newState = { ...state, filterBy: productService.getDefaultFilter() };
            //     break

            // Shopping Cart
        case SET_CART_IS_SHOWN:
            return { ...state, isCartShown: action.isCartShown }

            case ADD_TO_CART:
                newState = { ...state, cart: [...state.cart, action.product] }
                break
            case REMOVE_FROM_CART:
                cart = state.cart.filter(product => product._id !== action.productId)
                newState = { ...state, cart }
                break

        case CLEAR_CART:
            return { ...state, shoppingCart: [] }


        case ADD_ORDER:
            newState = { ...state, orders: [...state.orders, action.order] }
            break
        default:
        

    }
    return newState
}

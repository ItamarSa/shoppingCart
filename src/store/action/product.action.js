import { productService } from '../../services/product.service.js'
import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { ADD_PRODUCT, ADD_ORDER, REMOVE_PRODUCT, SET_FILTER, SET_PRODUCTS, UNDO_REMOVE_PRODUCT, UPDATE_PRODUCT, REMOVE_FROM_CART, ADD_TO_CART } from '../reducer/product.reducer.js'
export const RESET_FILTER_BY = 'RESET_FILTER_BY';

// Action Creators:
export function getActionRemoveProduct(productId) {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}
export function getActionAddProduct(product) {
    console.log('productgetaction:', product)
    return {
        type: ADD_PRODUCT,
        product
    }
}
export function getActionAddOrder(order) {
    return {
        type: ADD_ORDER,
        order
    }
}
export function getActionUpdateProduct(product) {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}

export async function loadProducts() {
    try {

        const products = await productService.query()
        console.log('products:', products)
        // const products = await productService.query(filterBy)
        store.dispatch({
            type: SET_PRODUCTS,
            products
        })

    } catch (err) {
        // console.log('Cannot load products', err)
        throw err
    }

}
export async function loadProductsUser(userId) {
    try {
      // Get the current filterBy from the store
      const { filterBy } = store.getState().productModule;
      
      // Update the filterBy with the userId
      const updatedFilterBy = { ...filterBy, userId };
      
      // Call productService.query with the updated filterBy
      const products = await productService.query(updatedFilterBy);
  
      store.dispatch({
        type: SET_FILTER,
        filterBy: updatedFilterBy, // Update the filterBy in the store
      });
  
      store.dispatch({
        type: SET_PRODUCTS,
        products,
      });
    } catch (err) {
      console.log('Cannot load products', err);
      throw err;
    }
  }

export async function addProduct(product) {
    console.log('product:', product)
    try {
        const savedProduct = await productService.save(product)
        console.log('Added Product', savedProduct)
        store.dispatch(getActionAddProduct(savedProduct))
        return savedProduct
    } catch (err) {
        console.log('Cannot add product', err)
        throw err
    }
}
export async function addOrder(order) {
    try {
        const savedOrder = await orderService.save(order)
        store.dispatch(getActionAddOrder(savedOrder))
        return savedOrder
    } catch (err) {
        console.log('Cannot add order', err)
        throw err
    }
}
export function addToCart(product) {
    console.log('productcart:', product)
    store.dispatch({
        type: ADD_TO_CART,
        product
    })
}
export function removeFromCart(productId) {
    console.log('productId:', productId)
    store.dispatch({
        type: REMOVE_FROM_CART,
        productId
    })
}
export async function updateProduct(product) {
    try {
        const savedProduct= await productService.save(product)
        store.dispatch(getActionUpdateProduct(savedProduct))
    } catch (err) {
        console.log('Cannot save product', err)
            throw err
    }
}
export async function removeProduct(productId) {
    try {
        await productService.remove(productId)
        store.dispatch(getActionRemoveProduct(productId))
    } catch (err) {
        console.log('Cannot remove product', err)
        throw err
    }
}
export async function onRemoveProductOptimistic(productId) {
    store.dispatch({
        type: REMOVE_PRODUCT,
        productId
    })
    showSuccessMsg('Product removed')
    try {
        await productService.remove(productId)
    } catch (err) {
        console.log('Cannot remove product', err)
        throw err
        store.dispatch({
            type: UNDO_REMOVE_PRODUCT
        })
    }
}

export function setProductFilter(filterBy = productService.getDefaultFilter()) {
    // dispatch
    store.dispatch({ type: SET_FILTER, filterBy })
    // return Promise.resolve(filterBy)
    // return loadToys()
}
export const resetFilterBy = () => {
    return {
      type: RESET_FILTER_BY,
    };
  };



// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)


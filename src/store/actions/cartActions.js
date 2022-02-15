
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){

    return{
        type :ADD_TO_CART, // Actiona verdiğiniz isim
        payload : product //statetin durumunu değiştirecek veri
    }
}

export function removeFromCart(product){

    return{
        type :REMOVE_FROM_CART, // Actiona verdiğiniz isim
        payload : product //statetin durumunu değiştirecek veri
    }
}
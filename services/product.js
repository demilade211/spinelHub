import axios from ".";

export const uploadProduct = async (data) => {


    try {
        const res = await axios.post(`/api/v1/admin/product/create`,data)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const getAllProduct = async () => { 

    try {
        const res = await axios.get(`/api/v1/products`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    }


}


export const getOneProduct = async (productId) => {


    try {
        const res = await axios.get(`/api/v1/product/${productId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    }


}

export const addToCart = async (productId) => { 

    try {
        const res = await axios.post(`/api/v1/products/cart/${productId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const removeFromCart = async (productId) => {


    try {
        const res = await axios.delete(`/api/v1/products/cart/${productId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const addToWishList = async (productId) => { 

    try {
        const res = await axios.post(`/api/v1/products/wishList/${productId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const removeFromWishList = async (productId) => { 

    try {
        const res = await axios.delete(`/api/v1/products/wishList/${productId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}
export const UpdateQuantity = async (productId,obj) => { 

    try {
        const res = await axios.put(`/api/v1/products/cart/${productId}`,obj)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}
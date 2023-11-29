import axios from ".";

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
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    list:[{
            id: "1",
            name: "product one",
            brand: "brans",
            quantity: 10,
            price: "10000",
            imgUrl: "url",
            category: "elektronik",
            stock: 10,
            rating:3,
        }]
}

export const product = createSlice({
    name:'product',
    initialState,
    reducers: {
            setProducts:(state,action)=>{
                state.list=action.payload
            }
        },  
    }
)

export const {add,setProducts} = product.actions
export default product.reducer
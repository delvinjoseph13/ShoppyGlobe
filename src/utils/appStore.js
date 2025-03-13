import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './createCartSlice'

const appStore=configureStore(
    {
       reducer : {
        cart:cartReducer
       }

    }
)

export default appStore;
import {configureStore} from '@reduxjs/toolkit';

import cryptoReducer from '../Feactures/CryptoSlice';



export default configureStore({
    reducer:{
        crypto:cryptoReducer,
        
    }
})
import {configureStore} from '@reduxjs/toolkit'
import processingRequest from './requestStore/requestStore'

export const store = configureStore({
    reducer: {
        processingRequest:processingRequest
    }
})
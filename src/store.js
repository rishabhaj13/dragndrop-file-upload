import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { fileUploadApi } from './services/fileUploadApi';


export const store = configureStore({
  reducer: {
    
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fileUploadApi.middleware),
})

setupListeners(store.dispatch);
import { configureStore } from '@reduxjs/toolkit'
import libraryReducer from './features/library/library.slice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            library: libraryReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

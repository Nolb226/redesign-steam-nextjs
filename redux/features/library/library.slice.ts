import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ILibraryState {
    layoutView: 'grid' | 'list' | 'detail'
}

const initialState: ILibraryState = {
    layoutView: 'grid',
}
const librarySlice = createSlice({
    name: '@library',
    initialState,
    reducers: {
        initializeLibraryState() {
            return initialState
        },
        setLayoutView(
            state,
            action: PayloadAction<ILibraryState['layoutView']>
        ) {
            state.layoutView = action.payload
        },
    },
})

export const { initializeLibraryState, setLayoutView } = librarySlice.actions
export default librarySlice.reducer

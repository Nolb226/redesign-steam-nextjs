import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ILibraryState {
    layoutView: 'grid' | 'list' | 'detail'
}

const initialState: ILibraryState = {
    layoutView: 'list',
}
const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        setLayoutView(
            state,
            action: PayloadAction<ILibraryState['layoutView']>
        ) {
            state.layoutView = action.payload
        },
    },
})

export const { setLayoutView } = librarySlice.actions
export default librarySlice.reducer

import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { featchContacts, addContact, removeContact } from "./contacts-operation";

const initialState = {
    items: [ ],
    loading: false,
    error: null

}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState:  initialState ,
    extraReducers: {
        [featchContacts.pending]: (store) => {
            store.loading = true
        },
        [featchContacts.fulfilled]: (store, { payload }) => {
            store.loading = false
            store.items = payload
        },
        [featchContacts.rejected]: (store, { payload }) => {
            store.loading = false
            store.error = payload
        },
        [addContact.pending]: (store) => {
            store.loading = true
        },
        [addContact.fulfilled]: (store, { payload }) => {
            store.loading = false
            store.items.push(payload)
        },
        [addContact.rejected]: (store, { payload }) => {
            store.loading = false
            store.error = payload
        },
        [removeContact.pending]: (store) => {
            store.loading = true
        },
        [removeContact.fulfilled]: (store, { payload }) => {
            store.loading = false
            store.items = store.items.filter(item => item.id !== payload)
        },
        [removeContact.rejected]: (store, { payload }) => {
            store.loading = false
            store.error = payload
        }
    }
})


export default contactsSlice.reducer;
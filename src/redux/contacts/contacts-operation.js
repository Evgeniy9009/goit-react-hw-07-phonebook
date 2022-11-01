import * as api from '../../shared/api/contacts'
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getState } from "./contacts-selector";

const isDublicate = ({name, phone}, contacts) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();

    const result = contacts.find(item => {
        return (normalizedName === item.name.toLowerCase() && normalizedPhone === item.phone.toLowerCase())
    });
    return Boolean(result);
}


export const featchContacts = createAsyncThunk(
    'contacts/featch',
    async (_, thunkApi) => {
        try {
            const data = await api.getContacts()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
            
        }
    }
)
// export const featchContacts = () => {
//     const func = async (dispatch) => {
//         dispatch(actions.fetchContactsLoading())
//         try {
//             const data = await api.getContacts()
//             dispatch (actions.fetchContactsSuccess(data))
//         } catch (error) {
//             const { massege, response } = error
//             const errorData = {
//                 massege, status: response.status
//             }
//             dispatch(actions.fetchContactsError(errorData))
//         }
//     }
//     return func
// }

export const addContact = createAsyncThunk(
    'contacts/add',
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data)
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    },
    {
        condition: (data, { getState }) => {
        const { contacts } = getState()
        if (isDublicate(data, contacts.items)) {
            return alert ('sorry')
        }
    }}
)

// export const addContact = (data) => {
//     const func = async (dispatch) => {
//         // const { contacts } = getState()
//         // if (isDublicate)
//         try {
//             dispatch(actions.addContactLoading())
//             const result = await api.addContact(data)
//             dispatch(actions.addContactSuccess(result))
//         } catch (error) {
//             const { massege, response } = error
//             const errorData = {
//                 massege, status: response.status
//             }
//             dispatch(actions.addContactError(errorData))
//         }
        
//     }
//     return func
// }
export const removeContact = createAsyncThunk(
    'contacts/remove',
    async (id, { rejectWithValue }) => {
        try {
            await api.removeContact(id)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


// export const removeContact = (id) => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.removeContactLoading())
//             await api.removeContact(id)
//             dispatch(actions.removeContactSuccess(id))
//         } catch (error) {
//             const { massege, response } = error
//             const errorData = {
//                 massege, status: response.status
//             }
//             dispatch(actions.removeContactError(errorData))
//         }
        
//     }
//     return func
// }

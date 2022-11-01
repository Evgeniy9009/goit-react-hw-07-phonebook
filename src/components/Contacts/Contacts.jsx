import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'

import { useDispatch } from 'react-redux'
import { featchContacts} from 'redux/contacts/contacts-operation'
// import { setFilter } from 'redux/filter/filter-slice'
// import { getFilter } from 'redux/filter/filter-selector'
// import { getFilterContacts } from 'redux/contacts/contacts-selector'
import { useEffect } from 'react'

export default function Contacts() {
    // const contacts = useSelector(getFilterContacts)
    // const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(featchContacts())
    }, [dispatch])

return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm />
        
        <h2>Contacts</h2>
        <Filter  />
        <ContactList />
    </div>
    )
}

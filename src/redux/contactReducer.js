import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"
import { statusContacts } from "./types"
export const AppContact = () => {
    const dispatch = useDispatch()
    const action = useSelector(state => state.action)
    const handleSubmit = (type) => {
     dispatch({type:"action/setAction" , payload:type})
    }
    return(
        <div>
            <button  onClick={() => handleSubmit(statusContacts.ADD_CONTACT)} aria-pressed={action === statusContacts.ADD_CONTACT}>Add</button>
            <button onClick={() => handleSubmit(statusContacts.REMOVE_CONTACT)} aria-pressed={action=== statusContacts.REMOVE_CONTACT}>REMOVE</button>
            <button onClick={() => handleSubmit(statusContacts.TOGGLE_CONTACT)} aria-pressed={action === statusContacts.TOGGLE_CONTACT}>Toggle</button>
            <button onClick={ () => handleSubmit(statusContacts.EDIT_CONTACT)} aria-pressed={action === statusContacts.EDIT_CONTACT}>Edit</button>
            <button onClick={ () => handleSubmit(statusContacts.FILTER_CONTACT)} aria-pressed={action === statusContacts.FILTER_CONTACT}>Filter</button>
        </div>
    )
}
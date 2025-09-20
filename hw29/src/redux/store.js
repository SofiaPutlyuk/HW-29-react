import {createStore} from "redux"
const savedContacts = localStorage.getItem("contacts")
const initialState  = {
    contacts:  savedContacts ? JSON.parse(savedContacts) : [
        {id:0 , name:"Marta" , surname:"Mostovyk" , number:"0985710403" , city:"Tatariv" , isOld:false}
    ],
    action:null,
    filter:""
}
const  reducer = (state = initialState , action ) => {
    switch(action.type){
        case "contact/addContact":
            return {
                ...state , contacts : [...state.contacts , action.payload]
            }
        case "contact/removeContact":
            return {
                ...state,
              contacts :  state.contacts.filter(contact => contact.id !== action.payload)
            }
        case "contact/toggleOldContact":
             return {
                ...state ,
              contacts : state.contacts.map( contact => contact.id === action.payload ? {...contact , isOld: !contact.isOld} :contact)
             }
        case "contact/editContact":
            return {
                ...state,
                contacts: state.contacts.map( contact => contact.id === action.payload.id ? {...contact , ...action.payload.edit} : contact)
            }
        case "contact/filterContact":
            return {
                ...state ,
                filter: action.payload
            }
        default:
            return state;
    }
}
export const store = createStore(reducer)
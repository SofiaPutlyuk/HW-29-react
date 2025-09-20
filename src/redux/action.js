import {nanoid} from "nanoid"
export const AddContact = ( name , surname , number , city) => ({
    type:"contact/addContact", 
    payload:{id:nanoid() ,name , surname ,number , city}
})
export const DeleteContact = (id) => ({
    type:"contact/removeContact",
    payload:id
})
export const ToggleOldContact = (id) => ({
    type:"contact/toggleOldContact",
    payload:id
})
export const EditContact = (id , changes)  => ({
    type:"contact/editContact",
    payload:{
        id , 
        edit:changes
    }
})
export const FilterContact = (filter) => ({
    type:"contact/filterContact",
    payload: filter
})
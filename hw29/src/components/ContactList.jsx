import { DeleteContact } from "../redux/action"
import { EditContact } from "../redux/action"
import { ToggleOldContact } from "../redux/action"
import { useDispatch } from "react-redux"
import styled from "styled-components"
const ContainerList = styled.ul`
    display:flex;
    width:900px;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
`
const ListItem = styled.li`
    list-style-type: none;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
`
const ItemInput = styled.input`
    width:200px;
    height:40px;
    background: linear-gradient(270deg, #76d557, #7ba4fe, #625fff, #9cfe7b);
    border:none;
    border-radius:10px;
`
const ButtonDelete = styled.button`
border:none;
border-radius:8px;
background: linear-gradient(270deg, #76d557, #fe7b7b, #ff5faf, #9cfe7b);
  width:200px;
 height:40px;
`
export const ContactList = ({ contacts }) => {
    const dispatch = useDispatch()
    return (
        <ContainerList>
            {contacts.map((contact) => (
                <ListItem key={contact.id} style={{ textDecoration: contact.isOld ? "line-through" : "none" }}>
                    <p>Name :{contact.name}</p>
                    <p> Surname : {contact.surname}</p>
                    <p>Number: {contact.number}</p>
                    <p> City :{contact.city}</p>
                    <ButtonDelete onClick={() => dispatch(DeleteContact(contact.id))}>Delete</ButtonDelete>
                    <label>
                        isOld:
                        <input type="checkbox" checked={contact.isOld} onChange={() => dispatch(ToggleOldContact(contact.id))} />
                    </label>
                    <label>
                        Edit:
                    <ItemInput type="text" value={contact.name} onChange={(e) => dispatch(EditContact(contact.id, { name: e.target.value }))} />
                    </label>
                </ListItem>
            ))}
        </ContainerList>
    )
}
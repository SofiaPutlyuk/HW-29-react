import { useDispatch, useSelector } from "react-redux"
import { useState , useEffect } from "react"
import { ContactList } from "./ContactList"
import { nanoid } from "nanoid"
import { FaUser , FaPencilAlt ,  } from "react-icons/fa";
import { FaSquarePhone ,FaHouse } from "react-icons/fa6";
import { IoFilterOutline , IoPersonAddSharp } from "react-icons/io5";
import styled, { keyframes } from "styled-components"
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`
const MainWrapper = styled.div`
    width:1200px;
    height:1500px;
    display:flex;
    background-size: 800% 800%;
    flex-direction:column;
    background: linear-gradient(270deg, #ff7e5f, #feb47b, #ff7e5f, #feb47b);
    animation: ${gradientAnimation} 8s ease infinite;
    border-radius: 12px;
    margin:auto;

`
const WrapperForm = styled.form`
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
margin-top:30px;

`
 const WrapperInputs = styled.input`
width:300px;
height:40px;
background: linear-gradient(270deg, #1a80f5, #7ba4fe, #625fff, #7b8cfe);
border:none;
border-radius:10px;
padding-top:10px;
padding-bottom:10px;
padding-left: 50px;
`
const  ButtonAdd = styled.button`
width:100px;
height:30px;
border:none;
border-radius:10px;
background: linear-gradient(270deg, #f51a88, #fe7be8, #ff3ee9, #eb1f52);
`
const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align:center;
  margin-top:30px;
`

export const ContactForm = () => {
    const [name , setName] = useState("")
    const [surname , setSurname] = useState("")
    const [number , setNumber] = useState("")
    const [city , setCity] = useState("")
    const [isOld , setIsOld]  = useState(false)
    const [filter , setFilter] = useState("")
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const handleSubmit = () => {
     dispatch({type:"contact/addContact" , payload:{id:nanoid(),   name , surname , number ,city , isOld}})
    }
    useEffect(() => {
    localStorage.setItem("contacts" , JSON.stringify(contacts))
    } , [contacts])
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.surname.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter) || contact.city.toLowerCase().includes(filter.toLowerCase()))
    return (
        <MainWrapper>
            <Title>YOUR CONTACT BOOK</Title>
        <WrapperForm onSubmit={(e) =>{e.preventDefault(); handleSubmit()}}>
            <label>
             <FaUser style={{position:"relative", left:30}}/>
            <WrapperInputs type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
            <FaPencilAlt style={{position:"relative", left:30}}/>
            <WrapperInputs type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </label>
            <label>
            <FaSquarePhone style={{position:"relative", left:30}}/>
            <WrapperInputs type="text" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            </label>
            <label>
            <FaHouse style={{position:"relative", left:30}}/>
            <WrapperInputs type="text" placeholder="City" value={city} onChange={(e) =>setCity(e.target.value)}/>
            </label>
            <ButtonAdd><IoPersonAddSharp /></ButtonAdd>
            <label>
            <IoFilterOutline style={{position:"relative", left:30}}/>
            <WrapperInputs type="text" placeholder="Filter" value={filter} onChange={(e) => setFilter(e.target.value)}/>
             </label>
            </WrapperForm>
        <ContactList contacts={filteredContacts}/>
        </MainWrapper>
    )
}
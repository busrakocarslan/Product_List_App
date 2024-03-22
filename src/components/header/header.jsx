import React from 'react'
import "./header.scss"
import { category } from '../../helper/data'
import Filtreproduct from '../productCard/filtreproduct'

export function Header() {
  return (
    <div style={{fontSize:"2rem",margin:"2rem",fontWeight:"bold",letterSpacing:"5px",color:"brown"}}>Products LİST</div>
  )
};


export function Buttons({handleclick}){
    let kategoriler=["ALL","ELECTRONICS","JEWELERY","MEN'S CLOTHİNG","WOMEN'S CLOTHİNG"]
    const handleclickButon=(category)=>{
      handleclick(category)
    }
    return(
        <div className='buttonDiv'>
         {kategoriler.map((kategori,index) => {
            return <button key={index} onClick={()=>handleclick(kategori)} >{kategori}</button>
        })}
        </div>

    )
}
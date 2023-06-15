import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'



function Animal(props) {

    const [searchParams, setSearchParams] = useSearchParams();

  let formul = Math.floor(((props.nufus / props.toplamNufus) * 100))
    return (
      
      <div class="card" style={{width: "80%", border: "0px"}}>
  <img class="card-img-top" src={props.url} alt="Card image cap"/>
  <div class="card-body">
  <h4 className="card-title" >{props.name}</h4>
    <p class="card-text">{props.description}</p>
    <div style={{padding: "25px", backgroundColor: "wheat", borderRadius: "20px"}}>
    <p className="card-text" >Ortalama Nüfus:   ~{props.toplamNufus} </p>
  

   <p className="card-text" style={{marginTop:"revert", fontWeight:"bold"}}>Verdiğiniz Zarar: <span style={{fontWeight:"bolder", color:"red"}}> -{props.nufus}</span></p>
   <p className="card-text" style={{marginTop:"revert", fontWeight:"bold"}}>Kalan Nüfus:  <span style={{fontWeight:"bolder", color:"green"}}>{props.toplamNufus - props.nufus}</span></p>   
    </div>

  </div>
</div>


 

 // Create a prime number counter 1 to 100 
    )

}




export default Animal;
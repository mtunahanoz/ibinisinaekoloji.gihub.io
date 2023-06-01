import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'



function Animal(props) {

    const [searchParams, setSearchParams] = useSearchParams();


    return (
      
      <div class="card" style={{width: "80%", border: "0px"}}>
  <img class="card-img-top" src={props.url} alt="Card image cap"/>
  <div class="card-body">
  <h4 className="card-title" >{props.name}</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div style={{padding: "25px", backgroundColor: "wheat", borderRadius: "20px"}}>
    <p className="card-text" >Ortalama Nüfus</p>
    <div class="progress " style={{backgroundColor:"#252e36"}}>
    <div class="progress-bar bg-success"  style={{width: "25%"}} ></div>
</div>
          <p className="card-text" style={{marginTop:"revert"}}>Ortalama Nüfus</p>
          <div class="progress" style={{backgroundColor:"#252e36"}}>
  <div class="progress-bar "  style={{width: "15%"}} ></div>

</div>hiç

    </div>
  </div>
</div>


 

 // Create a prime number counter 1 to 100 
    )

}




export default Animal;
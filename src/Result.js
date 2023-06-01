import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'
import Animal from './components/animal';
import Footer from './Footer'


function Result() {

    const [searchParams, setSearchParams] = useSearchParams();


    return (
      <div>
        
        <div className="container"> 
        <center>
            <div className="row">

              <div className='col-sm-4 '><Animal name="Kanguru" url="https://cdn-icons-png.flaticon.com/512/4082/4082120.png"></Animal></div>
              <div className='col-sm-4 '><Animal name="Ayı" url="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/bear.png"></Animal></div>
              <div className='col-sm-4  '><Animal name="Ayı" url="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/bear.png"></Animal></div>
            

            </div>
           
            </center>
           
      </div>
      <center>
      <Footer></Footer> 

      </center>

</div>
    )

}




export default Result;
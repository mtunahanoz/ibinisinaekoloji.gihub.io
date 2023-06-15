import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'
import Animal from './components/animal';
import Footer from './Footer'
import "./result.css"
import QRCode from 'react-qr-code';
import EkolojikAyakIziUygulamasi from './AnimalPopulationCalculator';

function Result() {

    const [searchParams, setSearchParams] = useSearchParams();
  
    let kha = searchParams.get("param1");
    let sukha = searchParams.get("param2");
    let carbonkha = searchParams.get("param3");
    return (
      <div>
        
        <center>

    
<div className="jumbotron">




            
<h1>Ekolojik Ayak İzi Sonucunuz</h1>

<br></br>
<br></br>
<br></br>

<div className='row' style={{alignItems:"center"}}>
<div className='col-sm-4 '>

<h5>Dünya Ortalaması</h5>
<h5>2.7 kha <i className="fa-solid fa-earth-europe" style={{color:"dodgerblue"}}></i></h5>

</div>
<div className='col-sm-4 '>

<h1>Sizin Sonucunuz</h1>
<h1>{kha} kha <i className="fa-solid fa-seedling"  style={{color:"olivedrab"}}></i></h1>

</div>
<div className='col-sm-4 '>

<h5>Türkiye Ortalaması</h5>
<h5>2.7 kha <i className="fa-solid fa-people-roof"  style={{color:"dodgerblue"}}></i></h5>

</div>
</div>

        </div>
 

<div className='row' style={{alignItems:"center", textShadow:"1px 1px 5px black"}}>
<div className='col-sm-6 ' style={{ background:"url('https://www.travelandleisure.com/thmb/PtkzpF17oxHfxuTbsnUx7oJY20A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-tahoe-california-USLAKES0920-59df9ea26eaf4bbba7620eb604f0af3c.jpg')", height:"450px", padding: "0", backgroundSize:"cover"}}>
<div style={{position:"relative", height: "450px", width:"100%",  backgroundColor:"rgb(60 142 154 / 51%)"}}>
  <div style={{position: "relative", top:"35%"}}>
  <h2 style={{color:"azure"}}>Su Ayak İziniz</h2>
  <h3 style={{color:"azure"}}>{sukha} kha <i className="fa-solid fa-droplet" style={{color:"#03a5ee"}}></i></h3>
  <br></br>
 <a href="https://www.yarininsuyu.com/"> <button class="btn btn-info btn-lg"  style={{fontWeight:"bolder"}}>Daha Detaylı Test <i className="fa-solid fa-up-right-from-square" ></i></button></a>
  </div>
  </div>

</div>

<div className='col-sm-6 ' style={{ background:"url('https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/fbb74b9994ab488dba92cc1f9387b91a')", height:"450px", padding: "0", backgroundSize:"cover"}}>
<div style={{position:"relative", height: "450px", width:"100%", backgroundColor:"rgb(32 9 15 / 52%)"}}>
  <div style={{position: "relative", top:"35%"}}>
  <h2 style={{color:"azure"}}>Karbon Ayak İziniz</h2>
  <h3 style={{color:"azure"}}>{carbonkha} kha <i className="fa-solid fa-industry" style={{color:"darkslategrey"}}></i></h3>
  <br></br>
  <a href="https://yesilbiradim.com/">  <button class="btn btn-danger btn-lg" style={{fontWeight:"bolder"}}>Daha Detaylı Test <i className="fa-solid fa-up-right-from-square" ></i></button> </a>
  </div>
  </div>

</div>

</div>

</center>

<br></br>
<br></br>
<br></br>
<div class="container">
<h1>Ekolojik Raporunuz</h1>


<div class="row">
  <div class="col-sm-6">
    <div class="content" style={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}><span class="fa-solid fa-droplet" style={{fontSize:"100px"}}/><div style={{marginLeft:"20px"}}> <span>nqwponopqwrnopqwr</span></div>s</div>
  </div>
  <div class="col-sm-6">
    <div class="content" style={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}><span class="fa-solid fa-droplet" style={{fontSize:"100px"}}/><div style={{marginLeft:"20px"}}> <span>nqwponopqwrnopqwr</span></div>s</div>
  </div>
</div>

</div>
        <br></br>
<br></br>
<br></br>
<center>
        <h1>Ekolojik Yaşama Etkileriniz</h1>



<br></br>
<br></br>




   
  
   
   
            <EkolojikAyakIziUygulamasi kha_degeri={kha} />
{/*               <div className='col-sm-4 '><Animal name="Kanguru" description="Anavatanları Avustralya Kıtası ve Yeni Ginedir. Yaklaşık 45 milyon civarı bir nüfusa sahiptirler. " url="https://cdn-icons-png.flaticon.com/512/4082/4082120.png"></Animal></div>
              <div className='col-sm-4 '><Animal name="Ayı" description=" Anavatanları Kuzey Amerika, Güney Amerika, Avrupa ve Asya kıtalarında yaşarlar. " url="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/bear.png"></Animal></div>
              <div className='col-sm-4  '><Animal name="Deve" description="Anavatanları Orta Doğu ve Kuzey Afrikadır. Yaklaşık olarak 35 milyon civarı bir nüfusa sahiptirler." url="https://cdn-icons-png.flaticon.com/512/616/616534.png"></Animal></div>
              <div className='col-sm-4  '><Animal name="Lama" description="Anavatanları Güney Amerika'nın And Dağları bölgesidir. Yaklaşık 7 milyon civarı bir nüfusa sahiptirler." url="https://cdn-icons-png.flaticon.com/512/7432/7432729.png"></Animal></div>
              <div className='col-sm-4  '><Animal name="Yunus Balığı" description="Anavatanları okyanuslar ve denizlerdir, özellikle sıcak ve ılıman sularda yaşarlar. Yaklaşık olarak 1 milyon civarı bir nüfusa sahiptirler." url="https://cdn-icons-png.flaticon.com/512/408/408036.png"></Animal></div>
              <div className='col-sm-4  '><Animal name="Kutup Ayısı" description="Anavatanları Arktik bölgelerdir ve genellikle Kuzey Kutbu'nda yaşarlar. Yaklaşık olarak 25.000 civarı bir nüfusa sahiptirler" url="https://cdn-icons-png.flaticon.com/512/371/371714.png"></Animal></div> */}
           


           
            </center>




      
      <center>
      <Footer></Footer> 

      </center>

</div>
    )

}




export default Result;
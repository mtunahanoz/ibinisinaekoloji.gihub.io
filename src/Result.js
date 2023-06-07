import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'
import Animal from './components/animal';
import Footer from './Footer'
import "./result.css"
import QRCode from 'react-qr-code';
import EkolojikAyakIziUygulamasi from './AnimalPopulationCalculator';

function Result() {

    const [searchParams, setSearchParams] = useSearchParams();
  

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
<h1>{searchParams.get("param1") / 10} kha <i className="fa-solid fa-seedling"  style={{color:"olivedrab"}}></i></h1>

</div>
<div className='col-sm-4 '>

<h5>Türkiye Ortalaması</h5>
<h5>2.7 kha <i className="fa-solid fa-people-roof"  style={{color:"dodgerblue"}}></i></h5>

</div>
</div>

        </div>
        <br></br>
<br></br>
<br></br>
        <h1>Ekolojik Yaşama Etkileriniz</h1>

<br></br>
<br></br>
<br></br>



        </center>
  
        <center>
   
            <EkolojikAyakIziUygulamasi kha_degeri="4.8" />
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
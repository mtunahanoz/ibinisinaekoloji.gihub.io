import React from 'react';
import Animal from './components/animal';
import QRCode from 'react-qr-code';

class EkolojikAyakIziUygulamasi extends React.Component {


    azaltHayvanNufusu = (hayvanlar, kha_degeri) => {

        console.log(kha_degeri)
        let azalma_orani;

        if (kha_degeri >= 1 || kha_degeri >= 1.5) {
          azalma_orani = Math.random() * 0.07;
        } else if (kha_degeri > 1.5 || kha_degeri <= 2) {
          azalma_orani = Math.random() * 0.09 + 0.1;
        } else if (kha_degeri > 2 || kha_degeri < 2.5) {
          azalma_orani = Math.random() * 0.14 + 0.23;
        } else if (kha_degeri > 2.5 || kha_degeri <= 3) {
          azalma_orani = Math.random() * 0.1 + 0.1;
        } else if (kha_degeri > 3 || kha_degeri <= 3.5) {
          azalma_orani = Math.random() * 0.20 + 0.30;
        } else if (kha_degeri > 3.5 || kha_degeri <= 4) {
          azalma_orani = Math.random() * 0.40 + 0.70;
        } else {
          throw new Error("Geçersiz kHa değeri. 1 ile 4 arasında olmalıdır.");
        }
    
        const yeniHayvanlar = { ...hayvanlar };
    
        for (const [hayvan, { nufus }] of Object.entries(yeniHayvanlar)) {
          const nufus_azalma = Math.floor(nufus * azalma_orani);
          yeniHayvanlar[hayvan] = {
            ...yeniHayvanlar[hayvan],
            nufus: Math.max(0, nufus - nufus_azalma)
          };
        }
    
        return { hayvanlar: yeniHayvanlar, azalma_orani };
      };
  render() {
    const { kha_degeri } = this.props;
    const hayvanlar = {
      "Kanguru": {
        nufus: 45000000,
        toplamNufus: 45000000,
        image_url: 'https://cdn-icons-png.flaticon.com/512/4082/4082120.png',
        description: 'Anavatanları Avustralya Kıtası ve Yeni Ginedir. Yaklaşık 45 milyon civarı bir nüfusa sahiptirler. '
      },
      "Ayı": {
        nufus: 6000000,
        toplamNufus: 6000000,
        image_url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/bear.png',
        description: ' Anavatanları Kuzey Amerika, Güney Amerika, Avrupa ve Asya kıtalarında yaşarlar.'
      },
      "Deve": {
        nufus: 35000000,
        toplamNufus: 35000000,
        image_url: 'https://cdn-icons-png.flaticon.com/512/616/616534.png',
        description: 'Anavatanları Orta Doğu ve Kuzey Afrikadır. Yaklaşık olarak 35 milyon civarı bir nüfusa sahiptirler.'
      },
      "Lama": {
        nufus: 7000000,
        toplamNufus: 7000000,
        image_url: 'https://cdn-icons-png.flaticon.com/512/7432/7432729.png',
        description: "Anavatanları Güney Amerika'nın And Dağları bölgesidir. Yaklaşık 7 milyon civarı bir nüfusa sahiptirler"
      },
      "Yunus": {
        nufus: 7000000,
        toplamNufus: 7000000,
        image_url: 'https://cdn-icons-png.flaticon.com/512/408/408036.png',
        description: 'Anavatanları okyanuslar ve denizlerdir, özellikle sıcak ve ılıman sularda yaşarlar. Yaklaşık olarak 1 milyon civarı bir nüfusa sahiptirler.'
      },
      "Kutup Ayısı": {
        nufus: 25000,
        toplamNufus: 25000,
        image_url: 'https://cdn-icons-png.flaticon.com/512/371/371714.png',
        description: "Anavatanları Arktik bölgelerdir ve genellikle Kuzey Kutbu'nda yaşarlar. Yaklaşık olarak 25.000 civarı bir nüfusa sahiptirler"
      }
    };

    const { hayvanlar: yeniHayvanlar, azalma_orani } = this.azaltHayvanNufusu(hayvanlar, kha_degeri);

 

    let url = `https://ibnisinaekoloji.vercel.app/result?`;
    Object.entries(yeniHayvanlar).forEach(([hayvan, { nufus }], index) => {
        console.log(hayvan+":"+nufus)
      if (index !== 0) {
        url += '&';
      }
      url += `${hayvan}=${nufus}`;
    });

    
    return (

        
        <div className='row'>
          {Object.entries(yeniHayvanlar).map(([hayvan, { nufus, image_url, description, toplamNufus }]) =>
          

        
          (
            
            <div className='col-sm-4'>
                <li key={hayvan}>
              {hayvan}: {nufus} 
              
            </li>
                 <Animal name={hayvan} description={description} url={image_url} nufus={nufus} toplamNufus={toplamNufus}></Animal>
            </div>
       
          ))}

<div className="jumbotron2" style={{backgroundImage:"url(a)"}}>

<div className="container"> 

<div className='row' style={{alignItems:"center"}}>
<div className='col-sm-6 '>

<h1>Arttırılmış Gerçeklik Deneyimi İçin</h1>
<br/>


<button className='btn btn-success btn-lg'><i class="fa-brands fa-google-play"></i> İbn-i Sina Ekoloji AR</button>

<br/>
<br/>
<span>Adım 1: Uygulamayı indir </span> <br/>
<span>Adım 2: Sağdaki QR kodu okut (bilgisayardan mobile) ya da QR koda tıkla (mobil üzerinden) </span> <br/>
<span>Adım 3: Arttırılmış Gerçeklik Deneyimini Yaşa</span> <br/>

</div>
<div className='col-sm-6 '>

<a href={url}><QRCode  viewBox={`0 0 502 500`} bgColor="azure" fgColor="black" value={url}></QRCode>
</a>
</div>

</div>

        </div>
        </div>

</div>




     
    );
  }
}

export default EkolojikAyakIziUygulamasi;

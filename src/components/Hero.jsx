import React ,{useEffect, useState} from 'react'


function Hero(){
    let [countriesInfo,setcountriesInfo] = useState([]);

    async function getCountryData(){
        const API_URL = "http://restcountries.com/v3.1/all"
        let response = await fetch(API_URL);
        let countryData = await response.json();

        setcountriesInfo(countryData);
        console.log("country data are",countryData)

        let countryflag = countryData.map ( (country)=>{
            return country.flags.svg;
        })
        console.log("country flags url are",countryflag)
    }
    useEffect( () =>{
        getCountryData();
    },[])


    return (

        <div className='country-data'>
            <div className='countries'>

                {countriesInfo.map((country)=>(
                    <div className='content'>
                        <img src = {country.flags.svg}/>
                        <h2>{ country.name.common}</h2>
                    </div>
                )
            )
                }
            </div>
        </div>
    )
}

export default  Hero
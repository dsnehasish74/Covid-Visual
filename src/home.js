import React,{useState,useEffect} from 'react';
import { FormControl,MenuItem,Select,Card,CardContent } from '@material-ui/core';
import InfoBox from './infobox.js'
import Table from './table.js'
import numeral from "numeral";
import Map from "./map";
import "leaflet/dist/leaflet.css";

function Home() {
  const [countries,setCountries]=useState([])
  const [country,setSelectedCountry]=useState("worldwide")
  const [countryInfo,setCountryInfo]=useState({})
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
   fetch("https://disease.sh/v3/covid-19/all")
     .then((response) => response.json())
     .then((data) => {
       setCountryInfo(data)
     });
 }, []);
  useEffect(()=>{
    const getCountriesData= async ()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data)=>{
        const countries=data.map((country)=>({
            id:country.countryInfo._id,
            name:country.country,
            value:country.countryInfo.iso3,
            cases:country.cases,
            recover:country.recovered,
            deaths:country.deaths,
            test:country.tests,
            active:country.active,
        }))
        setMapCountries(data);
          setCountries(countries)
      })
    }

    getCountriesData();
  },[]);

  const onCountryChange = async (e) => {
      const countryCode = e.target.value;
      setSelectedCountry(countryCode)
      const url=countryCode==='worldwide'?"https://disease.sh/v3/covid-19/all":(`https://disease.sh/v3/covid-19/countries/${countryCode}`)
      console.log(url)
      await fetch(url)
      .then((respond)=>respond.json())
      .then((data)=>{
        console.log(data)
        setCountryInfo(data)
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      })

    };
console.log(countryInfo)
  return (
    <div>
      <div className="App">

      <div className="App__left">
          <div className="app__header">
            <h1>Covid-19-Tracker </h1>
            <FormControl className="app__dropdown">
                <Select value={country} varient="outlined" onChange={onCountryChange}>
                  <MenuItem value="worldwide" >Worldwide</MenuItem>
                  {
                    countries.map((countrie)=>(

                        <MenuItem value={countrie.value} key={countrie.name}>{countrie.name}</MenuItem>

                    ))
                  }



                </Select>
            </FormControl>
          </div>
          <div className="stats">
              <InfoBox title="Total" newcase={numeral(countryInfo.todayCases).format("0,0")} totalcase={numeral(countryInfo.cases).format("0,0")} color="red"/>

              <InfoBox title="Recoverd" newcase={numeral(countryInfo.todayRecovered).format("0,0")} totalcase={numeral(countryInfo.recovered).format("0,0")} color="green"/>
              <InfoBox title="Deaths" newcase={numeral(countryInfo.todayDeaths).format("0,0")} totalcase={numeral(countryInfo.deaths).format("0,0")} color="grey"/>
              <InfoBox title="Active" newcase={numeral(countryInfo.todayCases).format("0,0")} totalcase={numeral(countryInfo.active).format("0,0")} color="blue"/>
          </div>
          <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
          />
      </div>

      <div className="App__right">
          <Card>
            <CardContent>
              <h2>Live Update of Covid Cases</h2>
                <Table data={countries}/>
            </CardContent>
          </Card>
      </div>



      </div>

    </div>
  );
}

export default Home;

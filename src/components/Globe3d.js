import React, {useState, useEffect} from 'react'
import Globe from 'react-globe.gl'
import * as d3 from "d3";
import {
    GLOBE_IMAGE_URL,
    BACKGROUND_IMAGE_URL,
  } from '../utility/constant';

import {getCases, getPov} from '../utility/api';




function Globe3d() {
    const [countries, setCountries] = useState([]);
    const [hoverD, setHoverD] = useState();
    const [{lat, lng}, setCoordinates] = useState({lat: null, lng: null});
    const colorScale = d3.scaleSequentialSqrt(d3.interpolateRdYlGn);
    const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

    useEffect(() => {
        // load data
        setCountries(getCases().then(res => {
            setCountries(res)
        }))
      }, []);

    useEffect(() => {
        getPov().then(res => {
            console.log(res)
            setCoordinates({lat : res.latitude, lng : res.longitude})
        })
    },[])

    console.log(lat)
      
    return (
        <>
         <Globe
            globeImageUrl={GLOBE_IMAGE_URL}
            backgroundImageUrl={BACKGROUND_IMAGE_URL}
            polygonStrokeColor = {() =>'#111'}
            polygonAltitude = {0.06}
            polygonSideColor={() => 'rgba(0, 100, 0, 0.05)'}
            polygonsTransitionDuration={200}
            polygonCapColor={d => d === hoverD ? 'black' : colorScale(getVal(d))}
            polygonsData={countries}
            onPolygonHover={setHoverD}
            pointOfView = {{lat, lng, altitude: 1000}}
            polygonLabel =  {({ properties: d, covid: c }) => `
            <div class="card">
              <img class="card-img" src="${c.countryInfo.flag}" alt="flag" />
              <div class="container">
                 <span class="card-title"><b>${d.ADMIN}</b></span> <br />
                 <span class="card-total-cases">${c.cases} total cases</span>
                 <div class="card-spacer"></div>
                 <hr />
                 <div class="card-spacer"></div>
                 <span id="active">${c.active} active</span> <br />
                 <span id="deaths">${c.deaths} dead</span> <br />
                 <span id="recovered">${c.recovered} recovered</span>
                 <div class="card-spacer"></div>
                 <hr />
                 <div class="card-spacer"></div>
                 <div class="bottom-info">
                  <span style="color: goldenrod;">Today</span>
                  <span>${c.todayCases} cases</span>
                  <span>${c.todayDeaths} deaths</span>
                 </div>
              </div>
            </div>
          `}
         />
        </>
    )
}

export default Globe3d;

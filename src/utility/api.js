import { GEOJSON_URL, CASES_API} from './constant';
import axios from 'axios'

 export const  getCases = () => {
    return new Promise((resolve,reject) => {
        let countriesWithCovid = [];
        axios.get(GEOJSON_URL)
        .then(res => {
            const countries = res.data;
            axios.get(CASES_API).then(resp => {
                const data = resp.data;
                data.forEach(item => {
                    const countryIdxByISO = countries.features.findIndex(
                        i => i.properties.ISO_A2 === item.countryInfo.iso2 && i.properties.ISO_A3 === item.countryInfo.iso3
                      );
                      if (countryIdxByISO !== -1) {
                        countriesWithCovid.push({
                          ...countries.features[countryIdxByISO],
                          covid: item
                        });
                      } else {
                                                // If no country was found using their ISO, try with name
                            const countryIdxByName = countries.features.findIndex(
                                i => i.properties.ADMIN.toLowerCase() === item.country.toLowerCase()
                            );

                            if (countryIdxByName !== -1) {
                                countriesWithCovid.push({
                                  ...countries.features[countryIdxByName],
                                  covid: item
                                });
                              }
                      }
                })
                resolve(countriesWithCovid)
            })
        })

    })
  }

  export const getPov = () => {
      return new Promise((resolve,reject) => {
          axios.get('https://geolocation-db.com/json/').then(res => {
              const data = res.data;
              resolve({
                  latitude : data.latitude,
                  longitude: data.longitude
              })
          })
      })
  }


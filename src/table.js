import React,{useState} from 'react'
import { FormControl,MenuItem,Select } from '@material-ui/core';

function Table({data}){
  console.log(data)
  const [sorttopic,setsorttopic]=useState("cases")
  let sorted_data=[...data]
  if(sorttopic==="cases"){
    sorted_data=data.sort((a,b)=>a.cases<b.cases?1:-1)
  }
  if(sorttopic==="recover"){
    sorted_data=data.sort((a,b)=>a.recover<b.recover?1:-1)
  }
  if(sorttopic==="death"){
    sorted_data=data.sort((a,b)=>a.death<b.death?1:-1)
  }
  if(sorttopic==="active"){
    sorted_data=data.sort((a,b)=>a.deaths<b.deaths?1:-1)
  }
  console.log(sorttopic)

  const onSortChange=(e)=>{
    // console.log(e.target.value)
    setsorttopic(e.target.value)
  }
  return(
  <div>
    <div className="table_nav">
        <FormControl className="app__dropdown">
        <Select  onChange={onSortChange} varient="outlined" value={sorttopic}>
          <MenuItem value="cases">Sort by no of Total Cases</MenuItem>
          <MenuItem value="deaths">Sort by no of Deaths</MenuItem>
          <MenuItem value="recover">Sort by no of Recoverd cases</MenuItem>
          <MenuItem value="active">Sort by no of active cases</MenuItem>
        </Select>
        </FormControl>
    </div>
    <div className="table">

        {

           sorted_data.map((country)=>{
            // console.log(country.id)
            // console.log(country.name)
            return(

              <tr  className="table__body" key={country.id? country.id:country.name}>
                <td >{country.name}</td>
                <td>{
                  ((sorttopic==="cases") ? (country.cases):
                    ((sorttopic==="recover")?(country.recover):
                    ((sorttopic==="deaths")?(country.deaths):
                    ((sorttopic==="active")?(country.active):null)
                  )
                  )
                  )
              }</td>
            </tr>

          )})


        }
    </div>
    </div>
  );
}

export default Table;

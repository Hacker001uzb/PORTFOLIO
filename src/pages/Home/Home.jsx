import React, { useState } from 'react'
import HomeTom from '../../components/HomeTome/HomeTom'
import './Home.scss'
import {foodData} from '../../lib/data'
import { useSearchParams } from 'react-router-dom'

function Home() {
  const [active, setActive] =  useState('milliy')
  let a = []
  foodData.forEach((item)=>{
    if(!a.includes(item.category)){
      a.push(item.category)
    }
  
  })
  return (
    <div className='home'>
        <HomeTom/>
        <ul className='home__nav'>
          {
            a.map((item, index)=>(
              <li onClick={()=> setActive(item)} key={index} className={ active == item? "home__item active" : "home__item"}>
              {item}
              </li>
            ))
          }
  
        </ul>
    </div>
  )
}

export default Home
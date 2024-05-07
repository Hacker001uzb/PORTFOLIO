import React from 'react'
import './HomeTom.scss'

function HomeTom() {
  return (
    <div className='home__top'>
        <div className='top__title'>
        <h2>Jaegar Resto</h2>
        <p>Tuesday, 3 Feb 2021</p>
        </div>
        <div className='top__search'>
        <i className='bi bi-search'></i>
        <input type="text" placeholder='' />
        </div>
    </div>
  )
}

export default HomeTom 
import React from 'react'
import { CORE_CONCEPTS } from '../Data.js'
import './intro.css'

const Intro = ({image,title,description}) => {
  return (
    <div>
        <section className='intro'>
            <li>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
            
        </section>
    </div>
  )
}

export default Intro
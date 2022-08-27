import React from 'react'
import hieee from './Imgs/hieee.png'
import './Styles.css'
const Home = () => {
  return (
    <>
        <section className='container' id='home'>
            <h1 className="sign">Results Speak Louder than Words</h1>
            <div className='home'>
                <img className='hieee' src={hieee} alt='...'/>
                <div className='quotation'>
                  Hello all,<br/> My name is AGNES LILY. I love building websites with cool features and feasible user interfaces. Iam more into solving problems with different kinds of approaches. Still an energetic student interested in -<ul>
                    <li>Learning</li>
                    <li>Experimenting</li>
                    <li>Analyzing</li>
                    <li>Understanding</li>
                  </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
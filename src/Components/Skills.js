import React from 'react'
import './Styles.css'
const Skills = () => {
  let skillSet={
    TechnicalSkill : ["HTML","CSS","JavaScript","ReactJS","MongoDb","NodeJS","ExpressJS","FireBase","SQL"],
    SoftSkill : ["Communication","TeamWork","Leadership","Adaptability","Humanity","Spirituality"],
    ProgrammingLanguages : ["JavaScript","C","C++"],
    LanguagesKnown : ["Tamil","English"],

    Hobbies:["Helping Amma","Calling friends","Competitive Programming","Designing Logos"]
  }

  return (
    <section className='container skill' id='skills'>
      <h1>SKILLS</h1>
      {skillSet && Object.values(skillSet).map((set,ind)=>(
      <div key={ind} className='row rowSkills'>
        <h3>{Object.keys(skillSet).find(i => skillSet[i] === set)}</h3>
        {set.map((skil,index)=>(
          <div key={index} className='square col' style={{border:"3px solid navy",color:"navy"}}>
          <h5>{skil}</h5>
        </div>
    ))}
          </div>
      ))}
    </section>
  )
}

export default Skills
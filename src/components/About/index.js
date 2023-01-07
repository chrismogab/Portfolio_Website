import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGit,
  faGitAlt,
  faHtml5,
  faJs,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { Link, NavLink } from 'react-router-dom'
import Christopher_Moghabghab_resume from '../../assets/images/Christopher_Moghabghab_resume.pdf'

//mahal chris hot about me

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p> I am a frontend developer who is always eager to learn more</p>
          <p>
            I have a financial engineering background. I was always inflated in
            learning more about crypto which has lead me to start developing
            smart contracts, and so my developing career began! I began
            developing smart contracts and persued my career as a Front-End
            developer specializing in Javascript, ReactJS, Typescript, Redux,
            ChakraUI, HTML, and CSS.
          </p>
          <p></p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <he> download pdf with react</he>
        <a
          className="pdf-link"
          href={Christopher_Moghabghab_resume}
          download="Christopher Moghabghab Resume"
        >
          <button className="pdf-button" type="submit">
            DOWNLOAD CV
          </button>
        </a>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About

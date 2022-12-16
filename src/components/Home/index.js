import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/C-logo.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['H', 'R', 'I', 'S', 'T', 'O', 'P', 'H', 'E', 'R']
  const FamilyNameArray = ['M', 'O', 'G', 'H', 'A', 'B', 'G', 'H', 'A', 'B']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  // bel useffect tahet ken fi error fa shelt l return la tozbat shefta mnel comments!
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}> H</span> */}
            {/* <span className={`${letterClass} _12`}> i,</span>
            <br />
            <span className={`${letterClass} _13`}> I</span>
            <span className={`${letterClass} _14`}>'m</span> */}
            <img className="logo-name" src={LogoTitle} alt="developer" />
            {/* hon hayde l tahet betkafe esmak fiya */}
            <AnimatedLetters
              className="logo-first-name"
              letterClass={letterClass}
              strArray={nameArray}
              idex={15}
            />
          </h1>
          <h2>
            <AnimatedLetters
              className="logo-family-name"
              letterClass={letterClass}
              strArray={FamilyNameArray}
              idex={22}
            />
            <br />
            <AnimatedLetters
              className="animated-letters-logo"
              letterClass={letterClass}
              strArray={jobArray}
              idex={22}
            />
          </h2>

          <h3>Frontend Developer / Javascript Expert </h3>
          <Link to="/contact" className="flat-button">
            CONTACT
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

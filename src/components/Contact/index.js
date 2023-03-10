import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
//ho

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_4dphprm',
        'contact_form',
        refForm.current,
        'uY12zTmPrRG_hxHDJ'
      )
      .then(
        () => {
          alert('Message Successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, Please try again !')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p
            style={{
              position: 'absolute',
              marginTop: '310px',
              marginLeft: '10px',
              color: '#ffd700',
            }}
          >
            +1 (832) 732 3254
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    style={{ cursor: 'pointer' }}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* <button style={{ color: 'blue' }}>alerttt</button> */}

      <Loader type="pacman" />
    </>
  )
}

export default Contact

import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../images/VG-logo.png'

const Logo = ({ image, text }) =>
  <img src={image} width="196" height="123" alt={text} />

const Header = () => {
  return (
    <div className="tc pt2 pb2">
      <Link to="/">
        <Logo image={LogoImage} text="Village Guitars" />
      </Link>
      <div className="bt bb tc mw7 center mt4">
        <div className="f6 f5-l link bg-animate black-80 dib pa2 ph3_l">
          97, High Street, Wingham, Kent CT3 1DE
        </div>
        <a
          className="f6 f5-l link bg-animate black-80 dib pa2 ph3_l"
          href="tel:01227721106">
          Tel: 01227 721106{' '}
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 dib pa1 ph3_l"
          href="mailto:info@villageguitars.co.uk">
          info@villageguitars.co.uk
        </a>
      </div>
    </div>
  )
}

export default Header

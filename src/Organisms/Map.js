import React from 'react'
import { Wrapper } from '../Molecules'

import MapImage from '../images/staticmap.png'

const GoogleMap = () => {
  return (
    <Wrapper>
      <a
        href="https://www.google.co.uk/maps/place/Village+Guitars/@51.2756342,1.2156514,15z"
        className="link dim dark-green">
        <div className="mw5 mw6-ns center pt4">
          <div className="aspect-ratio--1x1 aspect-ratio ">
            <div
              className="aspect-ratio--object cover center"
              style={{ backgroundImage: `url(${MapImage})` }}
            />
          </div>
          <span className="f6">open in google maps</span>
        </div>
      </a>
    </Wrapper>
  )
}

export default GoogleMap

import React from 'react'
import MapLoad from 'react-lazy-load'
import { Wrapper } from '../Molecules'

import MapImage from '../images/staticmap.png'

const GoogleMap = () => {
  return (
    <MapLoad>
      <Wrapper>
        <div className="mw5 mw6-ns center pt4">
          <div className="aspect-ratio--1x1 aspect-ratio ">
            <a href="https://www.google.co.uk/maps/place/Village+Guitars/@51.2756342,1.2156514,15z">
              <div
                className="aspect-ratio--object cover center"
                style={{ backgroundImage: `url(${MapImage})` }}
              />
            </a>
          </div>
        </div>
      </Wrapper>
    </MapLoad>
  )
}

export default GoogleMap

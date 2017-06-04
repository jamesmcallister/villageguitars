import React from 'react'
import { Link, Text } from '../Atoms'
import { Article, Wrapper } from '../Molecules'

import Map from './Map'

const Content = () => {
  return (
    <Wrapper>
      <Article title="About Us">
        <Text>
          We aim to please. Village Guitars is run by two enthusiasts who
          have shared an interest in guitars for many years. We have tried
          to create a comfortable environment in our interesting shop, where
          you can come and browse, try the guitars, or just have a friendly
          chat.
        </Text>
        <Text>
          We stock strings, picks, cables, straps and bags, tuners
          etc. Also offer setting up, hire, guitar, amp repairs and
          guitar tuition.
        </Text>
        <Text>
          How about a novel treat for your loved ones?
          We can arrange lessons for you in confidence and provide an
          introductory letter which you can give as a gift.
        </Text>
        <Text>
          The shop is situated in the Kentish village of Wingham, lying
          between Canterbury and Sandwich, within a fascinating old building
          parts of which date back to medieval times. The character of the
          building serves only to enhance the presentation of the
          instruments, so you will find no glitzy High Street showroom
          gimmicks here, just a warm welcome in pleasant and interesting
          surroundings.
        </Text>
        <Text>
          Please keep checking the website as our stock is constantly
          changing. We always have more stock than is shown here, so why not
          pay us a visit and have a browse? All descriptions and details
          of items offered are made without prejudice and are to the best of
          our knowledge believed to be accurate.
        </Text>
        <Text>
          We are always keen to look at any interesting guitars or amps that you
          may wish to
          consider
          selling on a commission basis.
        </Text>
        <Text>
          Many thanks for your interest - and we look forward to seeing you
          soon!
        </Text>
        <Text>
          COME AND CHECK OUT OUR LATEST OFFERS ..WE'VE ALWAYS GOT VERY GOOD
          DEALS TO TEMPT YOU.. WHO NEEDS BLACK FRIDAYS OR BLUE CROSS DAYS.. !!!
        </Text>
      </Article>
      <Article title="Guitar Tuition">
        <Text>
          We would be happy to put you in touch with our friendly guitar
          tutors for no obligation enquiries.
          For any of our site visitors from North/North West Kent who are
          looking for guitar tuition, take a look at our associate:
        </Text>
        <Text>
          <Link url="http://g5guitar.co.uk">
            www.g5guitar.co.uk
          </Link>
        </Text>
      </Article>
      <Article title="finding us">
        <Text>
          On the A257:
          <br />
          {' '}
          97, High Street,<br />Wingham,<br />Kent<br />CT3 1DE.
          <br />
          <br />
          {' '}
          <Link url="tel:01227721106">
            Tel: 01227 721106
          </Link>
          {' '}
          <br />
          <Link url="mailto:info@villageguitars.co.uk">
            info@villageguitars.co.uk
          </Link>
          <br /><br />Opening Hours:<br />
          Tuesday/Saturday 10.30 - 4.00<br />
          Closed Mondays<br /><br />
          6 miles from Canterbury <br />
          6 miles from Sandwich<br />
          5 mins from both the A2 & A299
        </Text>
        <Map />
      </Article>
    </Wrapper>
  )
}

export default Content

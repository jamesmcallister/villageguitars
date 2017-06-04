import React from 'react'
import { Text } from '../Atoms'
import { Wrapper, Article } from '../Molecules'

const ToBeDisplayed = ({ Name, Notes }) =>
  <Article title={Name}>
    <Text>{Notes}</Text>
  </Article>

const Proclamation = ({ store }) => {
  const ProclamationData = Object.keys(store)
    .map(x => store[x])
    .map(id => id.fields)
    .filter(fields => fields.notAProduct === true)
    .filter(fields => fields.DisplayOnWebSite === true)
    .map((Data, i) => <ToBeDisplayed key={i} {...Data} />)

  return (
    <Wrapper>
      {ProclamationData}
    </Wrapper>
  )
}

export default Proclamation

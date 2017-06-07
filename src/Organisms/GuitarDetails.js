import React from 'react'
import { safeUrl } from '../Helper.js'
import { Image } from '../Atoms'

const GuitarDetails = ({ url, store }) => {
  const result = () => {
    const filterd = Object.keys(store)
      .map(key => store[key])
      .map(id => id.fields)
      .filter(fields => safeUrl(fields.Name) === url)
    return filterd ? filterd : null
  }

  const { Name, Notes, Attachments } = result()[0]

  document.title = `${Name} - Village Guitars Wingham`

  return (
    <section className="mw7 center">
      <article className=" bb b--black-10 db pv4 ph3 ph0-l no-underline black">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-60-ns">
            <Image Name={Name} Attachments={Attachments} />
          </div>
          <div className="w-100 w-40-ns pl3-ns">
            <h1 className="f2 fw1 mt0 lh-title">
              {Name}
            </h1>
            <p className="f6 f5-l lh-copy">
              {Notes}
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default GuitarDetails

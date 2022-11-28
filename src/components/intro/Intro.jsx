import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      strings: ['Computer Engineer'],
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imageContainer'>
          <img src='assets/VuralcanAsal.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi, I'm</h2>
          <h1>Vuralcan Asal</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  )
}

import './experience.scss'
import { experience } from '../../data'
import { useState } from 'react'

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = experience

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='experience' id='experiences'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className='container' key={d.id}>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <h2>{d.title}</h2>
                  <p>{d.company}</p>
                  <span>{d.date}</span>
                </div>
              </div>
              <div className='right'>
                <img src={d.image} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='assets/arrow.png'
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src='assets/arrow.png'
        className='arrow right'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  )
}

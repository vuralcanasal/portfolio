import './skill.scss'
import { Rating } from 'react-simple-star-rating'

export default function Skill() {
  return (
    <div className='skill' id='skills'>
      <div className='container'>
        <div className='item'>
          <img src='assets/java.png' alt='' />
          <Rating
            className='rating'
            size={'1.5vw'}
            initialValue={5}
            fillColor='darkorange'
            emptyColor='darkgrey'
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/python.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={4}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/cplusplus.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={4}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/springboot.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={3}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/react.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={3}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/sap.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={3}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/mongodb.png' alt='' id='width' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={3}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/mssql.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={3}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/html.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={2}
            readonly
          />
        </div>

        <div className='item'>
          <img src='assets/css.png' alt='' />
          <Rating
            className='rating'
            fillColor='darkorange'
            emptyColor='darkgrey'
            size={'1.5vw'}
            initialValue={2}
            readonly
          />
        </div>
      </div>
    </div>
  )
}

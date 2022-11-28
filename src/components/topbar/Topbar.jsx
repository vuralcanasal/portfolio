import './topbar.scss'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiHomeSmile } from 'react-icons/bi'

export default function Topbar({ menuActive, setMenuActive }) {
  return (
    <div className={'topbar ' + (menuActive && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a
            href='#intro'
            className='logo'
            onClick={() => setMenuActive(false)}
          >
            <BiHomeSmile />
          </a>
          <div className='itemContainer'>
            <a
              href='https://www.linkedin.com/in/vuralcanasal/'
              target='_blank'
              rel='noreferrer'
              className='icon'
            >
              <FaLinkedin />
            </a>
          </div>
          <div className='itemContainer'>
            <a
              href='https://www.github.com/vuralcanasal'
              target='_blank'
              rel='noreferrer'
              className='icon'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuActive(!menuActive)}>
            <span className='line1'></span>
            <span className='line1'></span>
            <span className='line1'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

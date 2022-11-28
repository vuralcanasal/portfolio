import './menu.scss'

export default function Menu({ menuActive, setMenuActive }) {
  return (
    <div className={'menu ' + (menuActive && 'active')}>
      <ul>
        <li onClick={() => setMenuActive(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a href='#skills'>Skills</a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a href='#experiences'>Experiences</a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a href='#contact'>Contact</a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a
            href='https://drive.google.com/file/d/1ro-3S1GDAASjCdsO2WMtWWhMzOLOaIgr/view?usp=share_link'
            target='_blank'
            rel='noreferrer'
          >
            Go To CV
          </a>
        </li>
      </ul>
    </div>
  )
}

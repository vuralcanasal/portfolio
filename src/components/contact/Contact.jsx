import './contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='container'>
        <div className='item'>
          <a href='mailto:vuralcanasal@gmail.com'>
            <img src='assets/gmail.png' alt='' />
          </a>
          <span>vuralcanasal@gmail.com</span>
        </div>

        <div className='item'>
          <a
            href='https://api.whatsapp.com/send?phone=905077982313'
            target='_blank'
            rel='noreferrer'
          >
            <img src='assets/whatsapp.png' alt='' />
          </a>
          <span>+90 507 798 2313</span>
        </div>
      </div>
    </div>
  )
}

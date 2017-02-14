import React from 'react'
import Footer from './Footer'

const Bio = () => (
  <div className='bio'>
    <div className='avatar' />
    <div className='bio-text'>
      <h1>hi, i'm <b><a href=''>Mike</a></b></h1>
      <p>
        I am an enthusiast for <i>people</i>. You will find me growing the Madison entrepreneurial ecosystem,
        designing websites, building React apps, and working with others over coffee.
        <br /><br />You can reach me anytime at:
      </p>
      <ul className='contact_list'>
        <a href='mailto:mrfix84@gmail.com' alt='email me' target='_blank'>
          <li className='ion-android-mail'>
            <span className='contact_word' data-toggle='tooltip' data-placement='right' title='write me'>mrfix84@gmail.com</span>
          </li>
        </a>
        <a href='https://twitter.com/fixitup2' alt='tweet me' target='_blank'>
          <li className='ion-social-twitter'>
            <span className='contact_word' data-toggle='tooltip' data-placement='right' title='tweet me'>@fixitup2</span>
          </li>
        </a>
      </ul>
      <p>and find out more about my projects here:</p>
      <ul className='contact_list'>
        <a href='https://github.com/mfix22' alt='star me' target='_blank'>
          <li className='ion-social-github'>
            <span className='contact_word' data-toggle='tooltip' data-placement='right' title='code with me'>mfix22</span>
          </li>
        </a>
        <a href='https://linkedin.com/in/michaelfix2' alt='connect with me' target='_blank'>
          <li className='ion-social-linkedin'>
            <span className='contact_word' data-toggle='tooltip' data-placement='right' title='connect with me'>michaelfix2</span>
          </li>
        </a>
        <a className='medium' href='https://medium.com/@fixitup2' alt='read me' target='_blank'>
          <li className='icon-medium'>
            <span className='contact_word' data-toggle='tooltip' data-placement='right' title='read me'>@fixitup2</span>
          </li>
        </a>
        <a className='resume' href='assets/resume.pdf' alt='C/V' target='_blank'>
          <li className='octicon octicon-file-pdf'>
            <span className='contact_word' data-toggle='tooltip' data-placement='right' title='hire me'>résumé</span>
          </li>
        </a>
      </ul>
    </div>
    <Footer />
  </div>
)
module.exports = Bio

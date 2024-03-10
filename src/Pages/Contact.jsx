import React from 'react'

function Contact() {
  return (
    <div className='mt-5 text-white font-serif'>
        <h1>Contact Information</h1><br /><br /><hr /><br />
        <div>
          <strong>Email: </strong>
          <a href="mailto:sabin.lamichhane@blacktech.com.np">📧 sabin.lamichhane@blacktech.com.np</a>
        </div>
        <br />
        <div>
          <strong>Social Media</strong>
          <p>Connect with me social media:</p> <br />
          <ul className='  ml-4 list-disc'>
            <li>
              <p>LinkedIn:</p><a href="https://www.linkedin.com/in/sabin-lamichhane-b21a03275/" target="_blank">linkedin.com/in/SabinLamichhane</a>
            </li>
            <li>
              <p>Github:</p><a href="https://github.com/Sabin77" target="_blank">github.com/Sabin77</a>
            </li>
            <li>
              <p>Facebook:</p><a href="https://www.facebook.com/sabin.lamichhane.908/" target="_blank">facebook.com/SabinLamichhane</a>
            </li>
          </ul>
        </div>


    </div>
  )
}

export default Contact
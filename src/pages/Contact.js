import React from 'react'
import Contacts from '../components/Contact'

const Contact = ({userdetails}) => {
  return (
    <div>
      <Contacts userdetails={userdetails}/>
    </div>
  )
}

export default Contact;

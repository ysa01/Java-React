import React from 'react'
import { Button } from 'react-bootstrap'

export default function SignOut(props) {
  return (
    <div>
      <Button onClick={props.signIn}>Giriş Yap</Button>
      <Button style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
    </div>
  )
}

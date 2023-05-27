import React, { useRef } from 'react'
import { Form,Button} from 'react-bootstrap'
import { adduser } from './UserReduser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Create() {
    const nav=useNavigate()
    const myReff=useRef(null)
    const dispath =useDispatch()
    const users =useSelector((state)=>state.user)

    const HandleSubmit=()=>{
        const name =myReff.current.username.value
        const email =myReff.current.email.value
        dispath(adduser({id:users[users.length-1].id+1,name,email}))
        nav('/')
    }
  return (
    <div>
    <Form onSubmit={(e)=>e.preventDefault()} ref={myReff}>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control  name='username' placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>
      <Button type='submit' onClick={HandleSubmit}>submit</Button>
    </Form>
    </div>
  )
}

export default Create
import React, { useRef } from 'react'
import { Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Updateuser } from './UserReduser'


function Update() {
    const nav=useNavigate()
    const myReff =useRef(null)
    const {id}=useParams();
    const users =useSelector((state)=>state.user)
    const filteruser=users.filter((e)=>e.id===parseInt(id))
    const dispatch =useDispatch()

    const updateHandle=()=>{
        const [userId]=filteruser;
     
        const name = myReff.current.username.value
        const email = myReff.current.email.value
        dispatch(Updateuser({
            name:name,
            email:email,
            id:userId.id
        }))
        nav('/')
    }

  return (
    <div>
    {filteruser.map((item)=>(
    <Form onSubmit={(e)=>e.preventDefault()} ref={myReff}>
    <Form.Group className="mb-3" >

        <Form.Label>Name</Form.Label>
        <Form.Control  name='username' placeholder="Enter Name" defaultValue={item.name}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" defaultValue={item.email} />
        </Form.Group>
        <Button type='submit' onClick={updateHandle}>Update</Button>
        </Form>
        ))}
        
        
    </div>
  )
}

export default Update
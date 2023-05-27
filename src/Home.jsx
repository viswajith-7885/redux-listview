import { Button } from 'react-bootstrap';
import React from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeuser } from './UserReduser';



function Home() {
    const nav=useNavigate()
    const users =useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const removeHandle=(e)=>{
      const pId =parseInt(e.target.id)
      dispatch(removeuser({
        id:pId
      }))
    }

  return (
    <div>
    <Button onClick={()=>nav('/create')} className='primary' variant='success'>Create</Button>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {users.map((e)=>(
        <tr>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>
            <Button className='primary' onClick={()=>nav(`/edit/${e.id}`)}>edit</Button>
            <Button className='primary ms-4' id={e.id} onClick={removeHandle} variant='danger'>delete</Button>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>
    </div>
  )
}

export default Home
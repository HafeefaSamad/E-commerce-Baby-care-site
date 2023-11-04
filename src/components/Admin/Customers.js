import React, {  useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import { userContext } from '../../App'
import Main from './Main'

const Customers = () => {
    const{user} = useContext(userContext)
  return (
    <div className='d-flex'>
      <Main/>
      <Container fluid className='mt-3' style={{overflow:'scroll', height:'90vh'}}>
        <h1 className='mb-4' style={{textAlign:'center'}}>Customers</h1><hr />
              <Table striped border hover >
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
          </tr>
          </thead>
         {
          user.map((item)=>(
           <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
           </tbody> 
          ))
         }
        
       </Table>
       </Container>
    </div>
  )
}

export default Customers
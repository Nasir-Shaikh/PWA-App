import React, {useState, useEffect}from "react";
import { Table } from "react-bootstrap";
export default function Users(){
    const [data, setData]=useState([])
    const [mode, setMode] = useState('online')
    useEffect(()=>{
    let url="http://localhost:3000/restaurant";
    fetch(url).then((response)=>{
        response.json().then((result)=>{
            console.warn("result", result)
            setData(result)
            localStorage.setItem("users", JSON.stringify(result))
        })
    }).catch(err=>{
        //alert("catch block")
        let collection = localStorage.getItem("users")
        setData(JSON.parse(collection))
        setMode('offline')
    })
    },[])
    return(
        <div>
            <div>
                {
                    mode === 'offline'?
                    <div className="alert alert-warning" role="alert">You are in offline mode</div>:null
                }
            </div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Restaurant Name</th>
          <th>Address</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((item)=>{
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.rating}</td>
            </tr>
        })
       }
      </tbody>
    </Table>
  
        </div>
    )
}
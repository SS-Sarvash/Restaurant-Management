import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const AddCard=({onAdd})=>{
    const [Name,setName]=useState("");
    const [Mail,setMail]=useState("");
    const [Phno,setPhno]=useState("");
    const [Capacity,setCapacity]=useState(0);
    const [noOfTables,setTable]=useState(0);

    const HandleSubmission=(e)=>{
        e.preventDefault()
        console.log("Submitted");
        onAdd({Name,Mail,Phno,Capacity,noOfTables})

        setName("")
        setMail("")
        setPhno("")
        setCapacity(0)
        setTable(0)
    
    }
    const stl={
        textAlign:"left",
        
    }


    return (
        <><Container>
          <Container fluid style={{border:"1px solid white",borderRadius:"10px",width:"30rem"}}>
            <h1 style={{textAlign:"center",paddingTop:"10%",color:"rgb(212, 211, 211)"}}>Register Table</h1>
          <Card style={{ border:'1px solid grey',margin:"10%",borderRadius:"10px"}}>
            <Form onSubmit={HandleSubmission} style={{padding:"30px"}}>
                
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={(e)=> setName(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={stl}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={Mail} onChange={(e)=> setMail(e.target.value)} required/>
                </Form.Group>          
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" value={Phno} onChange={(e)=> setPhno(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label style={stl}>Capacity</Form.Label>
                <Form.Control type="number" placeholder="Enter Seat Capacity" value={Capacity} onChange={(e)=> setCapacity(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label style={stl}>Table Count</Form.Label>
                <Form.Control type="number" placeholder="Enter Table Count" value={noOfTables} onChange={(e)=> setTable(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
            <Button type="submit">Register</Button>
            </Row>
            
            </Form>
            </Card>
         </Container>
         </Container>
        </>
      );
}

export default AddCard
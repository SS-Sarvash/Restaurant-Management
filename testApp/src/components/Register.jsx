import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import bcrypt from 'bcryptjs'
import { Link } from 'react-router-dom';
const Register=()=>{
    const [uname,setUname]=useState("");
    const [upass,setUpass]=useState("");
const HandleSubmission=(e)=>{
    e.preventDefault()
    const hashPass=bcrypt.hashSync(upass,10);
    // const hashUname=bcrypt.hashSync(uname,10);
    localStorage.setItem('ukey',JSON.stringify({uname,hashPass})); //hashUname
    console.log("Login build success!");
}


    return(

    <Container>
          <Container id="cl" fluid style={{border:"1px solid white",borderRadius:"10px",width:"30rem"}}>
            <h1 id="cl2" style={{textAlign:"center",paddingTop:"10%",color:"rgb(212, 211, 211)"}}>Register</h1>
          <Card style={{ border:'1px solid grey',margin:"10%",borderRadius:"10px"}}>
            <Form onSubmit={HandleSubmission} style={{padding:"30px"}}>
                
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{color:"black",textAlign:"left"}}>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={uname} onChange={(e)=> setUname(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color:"black",textAlign:"left"}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={upass} onChange={(e)=> setUpass(e.target.value)} required/> 
                </Form.Group>          
            </Row>
            <Row>
            <Button type="submit">Register</Button>
            </Row>
            <row>
                <p style={{fontWeight:"normal"}}>Already a user, then <Link to="/Login">login</Link></p>
            </row>
            
            </Form>
            </Card>
         </Container>
         </Container>
    );
};

export default Register
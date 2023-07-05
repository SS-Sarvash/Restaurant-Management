import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import bcrypt from 'bcryptjs'
import { Link,useNavigate } from 'react-router-dom';



const LoginForm=({setPermission,permission})=>{
    const [uname,setUname]=useState("");
    const [upass,setUpass]=useState("");
    const [nameMatch,setNameMatch]=useState(false);
    const navigate=useNavigate();     //object creation for navigation between components

const HandleSubmission=(e)=>{
    e.preventDefault()
    const getHashedPass=JSON.parse(localStorage.getItem('ukey'))["hashPass"];
    // const getHashedName=JSON.parse(localStorage.getItem('ukey'))["hashUname"];
    const getUname=JSON.parse(localStorage.getItem('ukey'))["uname"];
   
    // bcrypt.compare(uname,getHashedName, function (err,isMatch){
    //     if(isMatch){
    //         setNameMatch(true);
    //     }
    //     else{
    //         console.log(err);
    //     }
        
    // })
    bcrypt.compare(upass,getHashedPass, function (err,isMatch){
        
        if (isMatch && getUname==uname){ //nameMatch
            setPermission(true);
            alert("login success!");
            navigate("/Admin");  //for navigating between my defined routes
        }
        else if(err){
            console.log("error encountered: ",err);
            setPermission(false);
        }
        else{
            alert("Unknown error/Login invalid");
            setPermission(false);
        }
    })
    // console.log("Login build success!");
}

    return(

    <Container>
          <Container id='cl' fluid style={{border:"1px solid white",borderRadius:"10px",width:"30rem"}}>
            <h1 id='cl2' style={{textAlign:"center",paddingTop:"10%",color:"rgb(212, 211, 211)"}}>Login</h1>
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
                <Form.Control type="password" placeholder="Enter Pa$$word" value={upass} onChange={(e)=> setUpass(e.target.value)} required/> 
                </Form.Group>          
            </Row>
            <Row>
            <Button type="submit">Login</Button>
            </Row>
            <row>
                <p style={{fontWeight:"normal"}}>Not registered yet? then <Link to="/Register">register</Link></p>
            </row>
            
            </Form>
            </Card>
         </Container>
         </Container>
    );
};

export default LoginForm
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carder from './Carder';
import { useNavigate } from 'react-router-dom';


function Bg({onDelete,data,permission}) {
  
  const navigate=useNavigate();
  if(permission){
  return (
    <Container fluid>
      <Row>
      
        {
        data.map((item)=><Col><Carder key={item.id} onDelete={onDelete} items={item}></Carder></Col>)
        }
        
      </Row>
    </Container>
  );
}
else{
  return(
    alert("You are not authorized to access this page, please login to continue!"),navigate("/Login")
    
    
  );
}
}

export default Bg;
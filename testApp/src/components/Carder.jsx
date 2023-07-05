import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carder({onDelete,items}) {
  const stl={textAlign:"left",color:"whitesmoke"}
  return (
    <Card style={{ width: '18rem',background:"transparent",border:'1px solid white',marginTop:'10px',paddingLeft:"10px",paddingRight:"10px",paddingBottom:"10px",paddingTop:"10px"}}>
      <Card.Body>
        <Card.Title style={stl}>ID: {items.id}<Button onClick={()=>onDelete(items.id)}style={{width:"50px",marginLeft:"50%",background:"red",}}>X</Button></Card.Title>
        <Card.Text style={stl}>
        <em>Name: </em><br></br>{items.Name}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Phno: </em><br></br>{items.Phno}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Mail: </em><br></br>{items.Mail}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Capacity: </em><br></br>{items.Capacity}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Number of Tables: </em><br></br>{items.noOfTables}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Carder;
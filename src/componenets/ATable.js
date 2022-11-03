import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const ATable = () => {

const in1 = document.getElementById("inp1");

  function addLigne(){
    const ligne = document.createElement("tr");
ligne.innerHTML = `<tr>
          <td>${in1.value}</td>
          <td><Button variant="primary">Primary</Button></td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>`;
document.getElementById("ligne").appendChild(ligne);
console.log(in1.value);

  }

  return(
    <>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" id="inp1" />
        <Form.Control type="email" id="inp2" />
      </Form.Group>
     </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody id="ligne">
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
     <Button variant="primary" onClick={addLigne}>Primary</Button>
    </>
  )
}
export default ATable
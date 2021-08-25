import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  
  function handleClick(){
  let formData = new FormData();
      formData.append('file', document.getElementById("file").files[0]);
      formData.append('document_type_id', "1")
      // formData.append('csrfmiddlewaretoken', "VumpaIfxmKtNv77teTIOBoKZPRzhJlyZtR1M9sZZYDX3cktkUKcuVnR7YnM6lPhI")
      console.log('>> formData >> ', formData);
 
      axios.post('https://edms.hidoefacilities.org/api/v4/documents/upload/?document_type_id=1&_token=71453535b111a909c6a8a183432f487bf2b9e55a',
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'accept': 'application/json',
              //'X-CSRFToken': 'hvya8bpftBcZOIIZoEiGxOW2ovovHLXXGsGMA32fbuEgoC8gnnvhqpGebDFYeh2G',
              // 'Cookie': 'csrftoken=OxNW7yDFbVvD9p7r0lm6ibaZVHagVPPDmUsj6in7NOZTQCtiGcQMCah74dn5xjym; sessionid=qs0astvozfv91phu44dkeb0vyt5njqtv'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
        })
        .catch(function () {
          console.log('FAILURE!!');
        });
  
  }
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Kevin Chawla and I am just a guide here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com"> Link</a> </td>
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/wynisco/pen/ExWmXzd"> Link</a> </td>
       
      </tr>
        
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    <div>
    <input type="file" id="file" />
    <button onClick={()=>{}handleClick()} > CLICK HERE </button>
    </div>
    </div>
  );
}

export default Homeworks;

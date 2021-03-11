import React from "react";
import "./Footer.css";
import * as emailjs from "emailjs-com";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Footer() {

  function sendEmail(e) {
   e.preventDefault();

    emailjs.sendForm('service_lsqykxh', "template_8mo48b3", e.target, 'user_T3OQ3RKYyXI5vtL9UZaHh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
   <div className="footer_container">
   <div id="title"><h1>Contact Me</h1></div>
   
<Form onSubmit={sendEmail} >
  <FormGroup>
    <Label style={{color:"whiteSmoke"}} for="exampleEmail">Email</Label>
    <Input style={{width:300, backgroundColor:"#302e2e"}} type="email" name="user_email" id="exampleEmail" placeholder="youremail@email.com"
    />
  </FormGroup>
  <FormGroup>
    <Label style={{color:"whiteSmoke"}} for="exampleName">Name</Label>
    <Input  style={{width:300, backgroundColor:"#302e2e"}} type="name" name="user_name" id="exampleName" placeholder="John Doe" />
  </FormGroup>
  <FormGroup>
    <Input  type="textarea" style={{color:"white",height:150, width:350, backgroundColor:"#302e2e"}} name="user_message" id="exampleText" placeholder="Type here your text..."/>
  </FormGroup>
  <Button type="submit"  style={{marginLeft:130, marginBottom:50}}>Submit</Button>
</Form>
   </div>
  );
}

export default Footer;

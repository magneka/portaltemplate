import React from "react";
import { messages } from "./loginForm.i18n";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import styled from "styled-components"
import LocaleContext from "../../../context/LocaleContext";
import { FieldError } from "../../../components/formcomponents/FormHelpers";
import { OrangeButton } from "../../../components/formcomponents/KfButtons";
import { PasswordWithReveal } from "../../../components/formcomponents/passwordReveal/PasswordWithReveal";


// Fordi Jumbotron ikke virket etter oppgradering
const JamboTron = styled.div`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: .3rem;
`

const LoginForm = (props) => {
  const locale = React.useContext(LocaleContext);
  const { EmailCap, EmailErr, PassCap, PassErr, SubButCap, LoginFailedErr, FormNotValidErr} = messages[locale];

  const handleChange = props.handleChange
  const submitHandler = props.submitHandler
  const hasError = props.hasError
  const authError = props.authError

  return (
    <>
      {/* 
      {(hasError("email") || hasError("password") || (authError)) && (
          <Alert variant="danger">
            {(authError) ? <span>Kunne ikke logge på med brukerid og passord oppgitt. </span> : ""}
            {FormNotValidErr}
        </Alert>
      )}
      */}

      <JamboTron style={{ maxWidth: "1000px" }}>
        <Container fluid="md"></Container>
        <Form onSubmit={submitHandler}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              {EmailCap}
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="col-md2"
                type="email"
                placeholder=""
                name="email"
                value={props.username}
                onChange={(event) => handleChange(event)}
              />
              {hasError("email") && <FieldError>{EmailErr}</FieldError>}
            </Col>
          </Form.Group>
          &nbsp;         

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              {PassCap}
            </Form.Label>
            <Col sm={10}>
              <PasswordWithReveal              
                type="password"
                name="password"
                placeholder=""
                handleChange={props.handleChange}
              />
              {hasError("password") && <FieldError>{PassErr}</FieldError>}
            </Col>
          </Form.Group>
          &nbsp;

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <OrangeButton type="submit"> {SubButCap}</OrangeButton>&nbsp;
              <OrangeButton>Glemt passord</OrangeButton>
            </Col>
          </Form.Group>
        </Form>
      </JamboTron>
    </>
  );
};

export default LoginForm;

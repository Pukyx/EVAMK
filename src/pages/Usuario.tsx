import { registrarUsuario } from "@/Firebase/Promesas"; 
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

export const Usuario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegistrar = async () => {
    try {
      await registrarUsuario({ username, password });
      alert("Usuario registrado");
      router.push("/Menu");
    } catch (error) {
      console.log("Error al registrar el usuario", error);
      alert("Error al registrar el usuario.");
    }
  };

  return (
    <>
      {/* Barra de navegación */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as="div">
            <Link href="/" passHref>
              Sanrio
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as="div">
              <Link href="/Login" passHref>
                Iniciar Sesión
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Formulario de registro */}
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
            <div className="text-center mb-4">
              <h2>Registrar Usuario</h2>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre de usuario"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                className="w-100"
                onClick={handleRegistrar}
              >
                Registrar Usuario
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Usuario;

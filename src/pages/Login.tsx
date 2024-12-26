import { verificarUsuario } from "@/Firebase/Promesas";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const eUsuario = await verificarUsuario(username, password);

      if (eUsuario) {
        console.log("Usuario encontrado.");
        router.push("/Menu");
      } else {
        console.log("Nombre de usuario o contraseña incorrectos");
        alert("Nombre de usuario o contraseña inválidos");
      }
    } catch {
      console.log("Error");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8bbd0, #fce4ec)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "500px", // Aumenté el tamaño máximo del formulario
          width: "100%",
          background: "#fff",
          padding: "40px", // Más espacio interno
          borderRadius: "20px", // Bordes más redondeados
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // Sombra más destacada
        }}
      >
        <h2
          className="text-center"
          style={{
            color: "#e91e63",
            fontWeight: "bold",
            fontFamily: "'Merriweather', serif",
            marginBottom: "30px", // Más espacio debajo del título
            fontSize: "2.5rem", // Título más grande
          }}
        >
          Iniciar Sesión
        </h2>
        <Form>
          {/* Campo de nombre de usuario */}
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold", fontSize: "1.2rem" }}>
              Nombre de Usuario
            </Form.Label>
            <InputGroup>
              <InputGroup.Text
                style={{
                  backgroundColor: "#fce4ec",
                  borderColor: "#e91e63",
                  color: "#e91e63",
                }}
              >
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                onChange={(e) => setUsername(e.currentTarget.value)}
                style={{
                  borderColor: "#e91e63",
                  fontSize: "1.1rem",
                }}
              />
            </InputGroup>
          </Form.Group>

          {/* Campo de contraseña */}
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold", fontSize: "1.2rem" }}>
              Contraseña
            </Form.Label>
            <InputGroup>
              <InputGroup.Text
                style={{
                  backgroundColor: "#fce4ec",
                  borderColor: "#e91e63",
                  color: "#e91e63",
                }}
              >
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.currentTarget.value)}
                style={{
                  borderColor: "#e91e63",
                  fontSize: "1.1rem",
                }}
              />
            </InputGroup>
          </Form.Group>

          {/* Botón de iniciar sesión */}
          <Button
            variant="primary"
            type="button"
            onClick={handleLogin}
            className="w-100 shadow"
            style={{
              background: "linear-gradient(135deg, #e91e63, #d81b60)",
              borderColor: "#e91e63",
              borderRadius: "30px",
              fontSize: "1.5rem", // Botón más grande
              padding: "15px", // Más espacio interno
            }}
          >
            <FaSignInAlt style={{ marginRight: "10px" }} />
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;

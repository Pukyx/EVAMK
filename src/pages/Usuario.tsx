import { registrarUsuario } from "@/Firebase/Promesas";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

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
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8bbd0, #fce4ec)",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px", // Ancho ajustado
          width: "100%",
          background: "#fff",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          className="text-center"
          style={{
            color: "#e91e63",
            fontWeight: "bold",
            fontFamily: "'Merriweather', serif",
            marginBottom: "40px",
            fontSize: "2.5rem",
          }}
        >
          Registrar Usuario
        </h2>
        <Form>
          {/* Campo de nombre de usuario */}
          <Form.Group className="mb-5">
            <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold", fontSize: "1.4rem" }}>
              Nombre de Usuario
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              onChange={(e) => setUsername(e.currentTarget.value)}
              style={{
                borderColor: "#e91e63",
                borderRadius: "15px",
                height: "60px",
                fontSize: "1.3rem",
                color: "#6a1b9a", // Color del texto
              }}
              className="placeholder-purple" // Clase para personalizar el placeholder
            />
          </Form.Group>

          {/* Campo de contraseña */}
          <Form.Group className="mb-5">
            <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold", fontSize: "1.4rem" }}>
              Contraseña
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.currentTarget.value)}
              style={{
                borderColor: "#e91e63",
                borderRadius: "15px",
                height: "60px",
                fontSize: "1.3rem",
                color: "#6a1b9a", // Color del texto
              }}
              className="placeholder-purple" // Clase para personalizar el placeholder
            />
          </Form.Group>

          {/* Botón de registro */}
          <Button
            variant="primary"
            type="button"
            className="w-100 shadow"
            onClick={handleRegistrar}
            style={{
              background: "linear-gradient(135deg, #e91e63, #d81b60)",
              border: "none",
              borderRadius: "30px",
              fontSize: "1.5rem",
              padding: "15px",
            }}
          >
            Registrar Usuario
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Usuario;


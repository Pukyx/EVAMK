'use client';
import { initialSatePersona } from "@/EstadosIniciales/Persona";
import { modificarPersona, obtenerPersona } from "@/Firebase/Promesas";
import { Persona } from "@/Interfaces/Interfaces";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Tabla } from "./Tabla";

export const Editar = () => {
  const [persona, setPersona] = useState<Persona>(initialSatePersona);
  const searchParams = useSearchParams(); // Hook para leer parámetros de la URL
  const router = useRouter();

  const handlePersona = (name: string, value: string | boolean) => {
    setPersona({ ...persona, [name]: value });
  };

  useEffect(() => {
    const key = searchParams.get("key");
    if (key) {
      obtenerPersona(key)
        .then((p) => {
          if (p != undefined) {
            setPersona(p);
          } else {
            alert("Persona no encontrada.");
            router.push("/Tabla");
          }
        })
        .catch((error) => {
          console.error("Error al obtener persona:", error);
          alert("Error al cargar la persona.");
          router.push("/Tabla");
        });
    } else {
      alert("Clave no proporcionada.");
      router.push("/Tabla");
    }
  }, [searchParams, router]);

  const handleModificar = () => {
    modificarPersona(persona)
      .then(() => {
        alert("Se modificó con éxito");
        router.push("/Tabla");
      })
      .catch((e) => {
        console.log(e);
        alert("Algo ocurrió");
      });
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
          maxWidth: "800px",
          width: "100%",
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          className="text-center"
          style={{
            color: "#e91e63",
            fontWeight: "bold",
            fontFamily: "'Merriweather', serif",
            marginBottom: "30px",
            fontSize: "2.5rem",
          }}
        >
          Editar Persona
        </h2>
        <Form>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  value={persona.nombre}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "40px", width: "100%" }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Apellido*</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  placeholder="Ingrese su apellido"
                  value={persona.apellido}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "40px", width: "100%" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Correo*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo"
                  value={persona.email}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "40px", width: "100%" }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Fecha de nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  name="fechaNacimiento"
                  value={persona.fechaNacimiento}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "40px", width: "100%" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Género*</Form.Label>
                <Form.Control
                  as="select"
                  name="genero"
                  value={persona.genero}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "40px", width: "100%" }}
                >
                  <option value="">Seleccione...</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="No especifica">No especifica</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Maquillaje favorito*</Form.Label>
                <Form.Control
                  as="select"
                  name="maquillaje"
                  value={persona.maquillaje}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "40px", width: "100%" }}
                >
                  <option value="">Seleccione...</option>
                  <option value="Máscara de pestañas">Máscara de pestañas</option>
                  <option value="Tinta de labios">Tinta de labios</option>
                  <option value="Sombras de ojos">Sombras de ojos</option>
                  <option value="Otro">Otro</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Form.Group>
                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Opinión*</Form.Label>
                <Form.Control
                  as="textarea"
                  name="favorito"
                  placeholder="Cuéntanos sobre tus productos favoritos"
                  value={persona.favorito}
                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                  style={{ borderRadius: "10px", borderColor: "#e91e63", height: "120px", width: "100%" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="danger"
            className="w-100 shadow"
            style={{
              background: "linear-gradient(135deg, #e91e63, #d81b60)",
              borderRadius: "30px",
              fontSize: "1.5rem",
              padding: "15px",
            }}
            onClick={handleModificar}
          >
            Editar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Editar;



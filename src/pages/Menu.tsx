import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { FaUserPlus, FaUsers, FaTable, FaSignOutAlt } from "react-icons/fa";

const Menu = () => {
  const router = useRouter();
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <Row>
        <Col md={8} lg={6}>
          <h2
            style={{
              color: "#e91e63",
              fontWeight: "bold",
              fontFamily: "'Merriweather', serif",
              marginBottom: "30px",
              fontSize: "2.5rem",
            }}
          >
            Menú Principal
          </h2>
          <ListGroup>
            {/* Registrar nueva persona */}
            <ListGroup.Item className="mb-4 border-0 bg-transparent">
              <Button
                onClick={() => router.push("/Usuario")}
                variant="danger"
                className="w-100 d-flex align-items-center justify-content-center shadow"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #d81b60)",
                  borderRadius: "30px",
                  fontSize: "1.5rem",
                  padding: "15px",
                }}
              >
                <FaUserPlus style={{ marginRight: "15px", fontSize: "1.8rem" }} />
                Registrar Nuevo Usuario
              </Button>
            </ListGroup.Item>

            {/* Registrar nueva persona */}
            <ListGroup.Item className="mb-4 border-0 bg-transparent">
              <Button
                onClick={() => router.push("/Persona")}
                variant="danger"
                className="w-100 d-flex align-items-center justify-content-center shadow"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #d81b60)",
                  borderRadius: "30px",
                  fontSize: "1.5rem",
                  padding: "15px",
                }}
              >
                <FaUsers style={{ marginRight: "15px", fontSize: "1.8rem" }} />
                Registrar Nueva Persona
              </Button>
            </ListGroup.Item>

            {/* Visualizar registros */}
            <ListGroup.Item className="mb-4 border-0 bg-transparent">
              <Button
                onClick={() => router.push("/Tabla")}
                variant="danger"
                className="w-100 d-flex align-items-center justify-content-center shadow"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #d81b60)",
                  borderRadius: "30px",
                  fontSize: "1.5rem",
                  padding: "15px",
                }}
              >
                <FaTable style={{ marginRight: "15px", fontSize: "1.8rem" }} />
                Visualizar Registros de Personas
              </Button>
            </ListGroup.Item>

            {/* Salir */}
            <ListGroup.Item className="mb-4 border-0 bg-transparent">
              <Button
                onClick={() => router.push("/")}
                variant="danger"
                className="w-100 d-flex align-items-center justify-content-center shadow"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #d81b60)",
                  borderRadius: "30px",
                  fontSize: "1.5rem",
                  padding: "15px",
                }}
              >
                <FaSignOutAlt style={{ marginRight: "15px", fontSize: "1.8rem" }} />
                Salir
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;

'use client';
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { FaPalette, FaSprayCan, FaStar, FaSearch, FaInfoCircle, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      {/* Barra de navegación superior */}
      <Navbar bg="white" variant="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as="div">
            <Link href="/" passHref>
              <span style={{ color: "#000", fontWeight: "bold", fontSize: "2rem", fontFamily: "'Poppins', sans-serif" }}>
                BIENVENIDO
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as="div" className="mx-2">
                <Link href="/Login" passHref>
                  <Button
                    variant="primary"
                    className="btn-gradient"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "1rem",
                      padding: "10px 20px",
                      borderRadius: "30px",
                    }}
                  >
                    <FaPalette style={{ marginRight: "10px" }} />
                    Iniciar Sesión
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenedor principal centrado */}
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(135deg, #f8bbd0, #fce4ec)",
          minHeight: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* Contenido principal */}
        <div
          style={{
            maxWidth: "800px",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            margin: "auto",
          }}
        >
          {/* Sección Bienvenida */}
          <Row id="bienvenido" className="mb-5">
            <Col>
              <h1
                style={{
                  color: "#e91e63",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  fontFamily: "'Merriweather', serif",
                }}
              >
                BIENVENIDOS A MAQUILLAJE ASIÁTICO
              </h1>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#6a1b9a",
                  fontFamily: "'Roboto', sans-serif",
                  lineHeight: "1.8",
                }}
              >
                En esta página encontrarás las opiniones sobre los mejores maquillajes asiáticos de la web.
              </p>
              <Button
                variant="danger"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #d81b60)",
                  border: "none",
                  fontSize: "1.2rem",
                  borderRadius: "30px",
                  padding: "10px 30px",
                }}
                className="mt-3 shadow"
              >
                <FaSearch style={{ marginRight: "10px" }} />
                Descubre Más
              </Button>
            </Col>
          </Row>

          {/* Sección ¿Quiénes Somos? */}
          <Row
            id="explicacion"
            className="mb-5 py-4"
            style={{
              backgroundColor: "#f8bbd0",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
            }}
          >
            <Col>
              <h2
                style={{
                  color: "#e91e63",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  fontFamily: "'Merriweather', serif",
                }}
              >
                ¿QUIÉNES SOMOS?
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#6a1b9a",
                  fontFamily: "'Roboto', sans-serif",
                  lineHeight: "1.8",
                }}
              >
                Somos una comunidad apasionada por los maquillajes asiáticos. Buscamos compartir opiniones y tendencias
                para que encuentres los productos ideales para tu estilo.
              </p>
              <Button
                variant="info"
                style={{
                  background: "linear-gradient(135deg, #29b6f6, #0288d1)",
                  border: "none",
                  fontSize: "1.2rem",
                  borderRadius: "30px",
                  padding: "10px 30px",
                }}
                className="mt-3 shadow"
              >
                <FaInfoCircle style={{ marginRight: "10px" }} />
                Leer Más
              </Button>
            </Col>
          </Row>

          {/* Sección Populares */}
          <Row
            id="populares"
            className="mb-5 py-4"
            style={{
              backgroundColor: "#fce4ec",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
            }}
          >
            <Col>
              <h2
                style={{
                  color: "#e91e63",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  fontFamily: "'Merriweather', serif",
                }}
              >
                POPULARES
              </h2>
              <Row className="mt-4">
                <Col md={4} className="d-flex flex-column align-items-center">
                  <img
                    src="/img/d.avif"
                    alt="Producto 1"
                    style={{
                      width: "150px", // Tamaño reducido
                      height: "150px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <p style={{ marginTop: "10px", color: "#6a1b9a", fontSize: "1.1rem" }}>Producto 1</p>
                </Col>
                <Col md={4} className="d-flex flex-column align-items-center">
                  <img
                    src="/img/s.webp"
                    alt="Producto 2"
                    style={{
                      width: "150px", // Tamaño reducido
                      height: "150px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <p style={{ marginTop: "10px", color: "#6a1b9a", fontSize: "1.1rem" }}>Producto 2</p>
                </Col>
                <Col md={4} className="d-flex flex-column align-items-center">
                  <img
                    src="/img/t.jpg"
                    alt="Producto 3"
                    style={{
                      width: "150px", // Tamaño reducido
                      height: "150px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <p style={{ marginTop: "10px", color: "#6a1b9a", fontSize: "1.1rem" }}>Producto 3</p>
                </Col>
              </Row>
              <Button
                variant="success"
                style={{
                  background: "linear-gradient(135deg, #66bb6a, #43a047)",
                  border: "none",
                  fontSize: "1.2rem",
                  borderRadius: "30px",
                  padding: "10px 30px",
                  marginTop: "20px",
                }}
                className="shadow"
              >
                <FaShoppingBag style={{ marginRight: "10px" }} />
                Ver Productos
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Menu;

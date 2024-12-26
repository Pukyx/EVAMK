import Link from "next/link" //importación de las etiquiqueta link 
import React from 'react';
import Container from 'react-bootstrap/Container'; //contanier->envuelve otros componentes y centra su contenido
import Nav from 'react-bootstrap/Nav'; //nav->crea barras de navegación
import Navbar from 'react-bootstrap/Navbar'; //navbar->barra de navegación al inicio de la página
import Row from 'react-bootstrap/Row'; //row->filas que contienen columnas,aliena el contenido de forma horizontal
import Col from 'react-bootstrap/Col'; //col->columnas dentro de filas que alinea el contenido de forma vertical
import 'bootstrap/dist/css/bootstrap.min.css'; //importación archivo css
//importación de íconos para redes sociales
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LuFlower } from "react-icons/lu";


// parte inicial de la página donde muestra la información principal como en la evaluacion anterior
export default function Home() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
          <Navbar.Brand as={Link} href="/">Sanrio Friends</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/Login">Iniciar Sesión</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Container className="mt-4">

                <Row>
                    <Col>
                        <h1>¿Quiénes somos?</h1>
                        <p>¡Hola fans de Sanrio!, Esta una comunidad creada para todos aquellos que adoran el adorable mundo de Sanrio y sus encantadores personajes.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1>Misión</h1>   
                        <p>Nuestra misión es crear una comunidad acogedora para los fans de Sanrio, donde puedan compartir su amor y pasión por los adorables personajes y el universo único de Sanrio.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1>Visión</h1>   
                        <p>Nuestra visión es ser una comunidad de fans de Sanrio reconocida y querida por ustedes los Sanrio Fans.encontrar inspiración, amistad, y felicidad a través de su amor compartido por Sanrio.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Video de Referencia</h2>
                        <p>Canción de Sanrio donde se nombran los personajes más reconocidos</p>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QTrfdYxbbbk?si=pnJ_jUv-_iy_zvSx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>

            <footer className="bg-dark text-white mt-4 py-3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>©2024 sanriofriends.com</p>
                            <div>
                                <LuFlower /><a href="https://www.sanrio.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">Sanrio Oficial</a>

                                <FaFacebook /><a href="https://www.facebook.com/Sanrio/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white me-3">Facebook</a>  

                                <FaXTwitter /><a href="https://x.com/sanrio" target="_blank" rel="noopener noreferrer" className="text-white me-3">x</a>  

                                <FaInstagram /><a href="https://www.instagram.com/Sanrio/" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
  );
}


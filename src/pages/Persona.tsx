'use client';
import { registrarPersona } from "@/Firebase/Promesas";
import { initialSatePersona } from "@/EstadosIniciales/Persona";
import { Persona } from "@/Interfaces/Interfaces";
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const FormularioPersona = () => {
    const [persona, setPersona] = useState<Persona>(initialSatePersona);

    const handlePersona = (name: string, value: string | boolean) => {
        setPersona({ ...persona, [name]: value });
    };

    const handleRegistrar = () => {
        const { nombre, apellido, fechaNacimiento, email, maquillaje, genero, favorito, terminos } = persona;

        if (!nombre || !apellido || !fechaNacimiento || !email || !maquillaje || !genero || !favorito || !terminos) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        registrarPersona(persona)
            .then(() => {
                alert("Registrado con éxito!");
                window.location.reload();
            })
            .catch((e) => {
                alert("Algo ocurrió");
                console.log(e);
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
                    Formulario de Registro
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
                                <Form.Label style={{ color: "#6a1b9a", fontWeight: "bold" }}>Fecha de nacimiento*</Form.Label>
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

                    <Row className="mb-4">
                        <Col>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    name="terminos"
                                    label="Acepta los términos y condiciones*"
                                    checked={persona.terminos}
                                    onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.checked)}
                                    style={{ fontSize: "1.1rem", color: "#6a1b9a" }}
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
                        onClick={handleRegistrar}
                    >
                        Enviar
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default FormularioPersona;


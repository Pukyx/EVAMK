import React, { useEffect, useState } from "react";
import { obtenerPersonas, eliminarPersona } from "@/Firebase/Promesas";
import { Table, Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { Persona } from "@/Interfaces/Interfaces";

export const Tabla = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  useEffect(() => {
    obtenerPersonas()
      .then((personas) => {
        console.log(personas);
        setPersonas(personas);
      })
      .catch((e) => {
        alert("No se logran cargar los datos");
        console.log(e);
      });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [keyToDelete, setKeyToDelete] = useState<string | null>(null);

  const handleEliminar = (key: string) => {
    setKeyToDelete(key);
    setShowModal(true);
  };

  const confirmarEliminacion = async () => {
    if (keyToDelete) {
      try {
        await eliminarPersona(keyToDelete);
      } catch (error) {
        console.error("Error al eliminar el socio: ", error);
        alert("No se pudo eliminar el socio");
      } finally {
        setShowModal(false);
        setKeyToDelete(null);
        window.location.reload();
      }
    }
  };

  const cancelarEliminacion = () => {
    setShowModal(false);
    setKeyToDelete(null);
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "20px" }}
      >
        <div
          style={{
            width: "90%",
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#e91e63", fontWeight: "bold" }}
          >
            Lista de Personas Registradas
          </h2>
          <Table
            striped
            bordered
            hover
            className="shadow-sm"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <thead style={{ background: "#f8bbd0", color: "#6a1b9a", fontWeight: "bold" }}>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Fecha Nacimiento</th>
                <th>Género</th>
                <th>Maquillaje favorito</th>
                <th>Opinión</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((p) => (
                <tr key={p.key} style={{ color: "#6a1b9a" }}>
                  <td>{p.nombre}</td>
                  <td>{p.apellido}</td>
                  <td>{p.email}</td>
                  <td>{p.fechaNacimiento}</td>
                  <td>{p.genero}</td>
                  <td>{p.maquillaje}</td>
                  <td>{p.favorito}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        href={{
                          pathname: "/Editar",
                          query: { key: p.key },
                        }}
                      >
                        <Button
                          variant="warning"
                          className="shadow-sm d-flex align-items-center justify-content-center"
                          style={{ fontSize: "1.2rem", background: "#ffc107", borderColor: "#ff9800", color: "#fff" }}
                        >
                          <FaEdit />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="shadow-sm d-flex align-items-center justify-content-center"
                        style={{ fontSize: "1.2rem", background: "#e91e63", borderColor: "#d81b60", color: "#fff" }}
                        onClick={() => handleEliminar(p.key || "")}
                      >
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

      {/* Modal de confirmación de eliminación */}
      <Modal show={showModal} onHide={cancelarEliminacion} centered>
        <Modal.Header closeButton style={{ background: "#f8bbd0", color: "#6a1b9a" }}>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#fce4ec", color: "#6a1b9a" }}>
          ¿Estás seguro de que deseas eliminar este registro?
        </Modal.Body>
        <Modal.Footer style={{ background: "#f8bbd0" }}>
          <Button variant="secondary" onClick={cancelarEliminacion} style={{ color: "#6a1b9a" }}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarEliminacion} style={{ background: "#e91e63", borderColor: "#d81b60" }}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tabla;

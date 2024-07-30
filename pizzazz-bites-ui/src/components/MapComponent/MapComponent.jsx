import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Button from "react-bootstrap/Button";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MapComponent = () => {
  const position = [42.80177, 10.365933];

  return (
    <div className="map-container d-flex">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Localita Ottone, 3, 57037 Portoferraio LI, Italy</Popup>
        </Marker>
      </MapContainer>
      <div class="col-lg-5 p-1">
        <Form>
          <div className="row">
            <div className="col-md-9">
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div data-mdb-input-init class="form-outline">
                    <Form.Control type="string" placeholder="Joe" />
                    <Form.Label>First name</Form.Label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div data-mdb-input-init className="form-outline">
                    <Form.Control
                      type="email"
                      placeholder="joe.doe@example.com"
                    />
                    <Form.Label>Email Address</Form.Label>
                  </div>
                </div>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <Form.Control type="string" className="" />
                <Form.Label>Subject</Form.Label>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <Form.Control as="textarea" style={{ height: "100px" }} />
                <Form.Label>First name</Form.Label>
              </div>
              <div className="text-center text-md-start">
                <Button type="button" className="btn btn-primary mb-5 mb-md-0">
                  Send
                </Button>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                  <p>
                    <small>
                      Localita Ottone, 3, 57037 Portoferraio LI, Italy
                    </small>
                  </p>
                </li>
                <li>
                  <i className="fas fa-phone fa-2x text-primary"></i>
                  <p>
                    <small>+ 01 234 567 89</small>
                  </p>
                </li>
                <li>
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                  <p>
                    <small>contact@gmail.com</small>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MapComponent;

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";
import url from "../../../utils/url";
import { toast } from "react-toastify";

const MapComponent = () => {
  const position = [42.80177, 10.365933];
  const [contactUsForm, setContactUsForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/api/ContactUs/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactUsForm),
      });
      if (response.ok) {
        toast.success("Message sent successfully");
        setContactUsForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <section className="text-center mb-5 p-5 map-container">
      <h3 className="mb-5">Contact us</h3>
      <div className="row">
        <div className="col-lg-5">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Localita Ottone, 3, 57037 Portoferraio LI, Italy</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="col-lg-7">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-md-9">
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="Name"
                      id="name"
                      labelClass="map-form-label"
                      required
                      value={contactUsForm.name}
                      onChange={(e) => {
                        setContactUsForm({
                          ...contactUsForm,
                          name: e.target.value,
                        });
                      }}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Email Address"
                      id="email"
                      labelClass="map-form-label"
                      type="email"
                      required
                      value={contactUsForm.email}
                      onChange={(e) => {
                        setContactUsForm({
                          ...contactUsForm,
                          email: e.target.value,
                        });
                      }}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  type="text"
                  label="Subject"
                  id="subject"
                  v-model="form3Subject"
                  wrapperClass="mb-4"
                  labelClass="map-form-label"
                  value={contactUsForm.subject}
                  onChange={(e) => {
                    setContactUsForm({
                      ...contactUsForm,
                      subject: e.target.value,
                    });
                  }}
                />
                <MDBTextArea
                  label="Message"
                  id="message"
                  required
                  wrapperClass="mb-4"
                  labelClass="map-form-label"
                  value={contactUsForm.message}
                  onChange={(e) => {
                    setContactUsForm({
                      ...contactUsForm,
                      message: e.target.value,
                    });
                  }}
                />
                <MDBBtn color="primary" className="mb-4" type="submit">
                  {" "}
                  Send{" "}
                </MDBBtn>
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
          </form>
        </div>
      </div>
    </section>
  );
};
export default MapComponent;

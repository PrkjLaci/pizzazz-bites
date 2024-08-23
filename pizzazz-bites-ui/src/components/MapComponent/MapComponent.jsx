import React from "react";
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

const MapComponent = () => {
  const position = [42.80177, 10.365933];

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
          <form>
            <div className="row">
              <div className="col-md-9">
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="First name"
                      id="form3FirstName"
                      labelClass="map-form-label"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Email Address"
                      id="form3Email"
                      labelClass="map-form-label"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  type="text"
                  label="Subject"
                  id="form3Subject"
                  v-model="form3Subject"
                  wrapperClass="mb-4"
                  labelClass="map-form-label"
                />
                <MDBTextArea
                  label="Message"
                  id="form3Textarea"
                  wrapperClass="mb-4"
                  labelClass="map-form-label"
                />
                <MDBBtn color="primary" className="mb-4">
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

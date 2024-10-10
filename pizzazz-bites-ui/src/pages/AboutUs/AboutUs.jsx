import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="video-container">
        <div className="video">
          <video
            src="../../../public/videos/about-us/4457933-uhd_3840_2160_24fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-heading-overlay">
            <h1>Pizzazz & Bites</h1>
          </div>
          <div className="video-text-overlay">
            <h2>Where Every Slice is a Slice of Heaven!</h2>
          </div>
        </div>
      </div>
      <MDBContainer className="about-us-description">
        <MDBRow>
          <MDBCol size="md" style={{ fontSize: "2.5rem" }}>
            Welcome to the wild world of Pizzazz & Bites!
          </MDBCol>
          <MDBCol size="md" style={{ fontSize: "1.5rem" }}>
            <>
              At Pizzazz & Bites, we don’t just serve pizza; we serve an
              experience that’ll make your taste buds dance the tango! Our chefs
              are like culinary ninjas, crafting authentic Italian dishes
              that’ll have you shouting ‘Mamma Mia!’ with every bite. Forget the
              boring chain restaurants; we’re here to spice up your dining life!
              <br />
              <br />
              Founded by a group of pizza enthusiasts who believed that food
              should be fun, we’ve taken the art of pizza-making to a whole new
              level. Our secret? A sprinkle of love, a dash of sass, and a whole
              lot of fresh ingredients. We’re not just about filling your
              stomach; we’re about filling your heart with joy and your
              Instagram feed with drool-worthy photos!
              <br />
              <br />
              So, whether you’re a cheese lover, a pepperoni fanatic, or a
              veggie crusader, we’ve got something for everyone. Come for the
              pizza, stay for the vibes, and leave with a smile (and maybe a
              food baby). Let’s make your meal unforgettable!
            </>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="about-us-statistics">
        <MDBRow>
          <MDBCol size="md" className="about-us-statistics-item">
            <h3 className="about-us-statistics-header">100%</h3>
            <p className="about-us-statistics-paragraph">Fresh Ingredients</p>
          </MDBCol>
          <MDBCol size="md" className="about-us-statistics-item">
            <h3 className="about-us-statistics-header">5+</h3>
            <p className="about-us-statistics-paragraph">Years of experience</p>
          </MDBCol>
          <MDBCol size="md" className="about-us-statistics-item">
            <h3 className="about-us-statistics-header">50+</h3>
            <p className="about-us-statistics-paragraph">
              Pizzas & others to choose from
            </p>
          </MDBCol>
          <MDBCol size="md" className="about-us-statistics-item">
            <h3 className="about-us-statistics-header">1000+</h3>
            <p className="about-us-statistics-paragraph">Happy customers</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="video-container">
        <div className="video">
          <video
            src="../../../public/videos/about-us/5897985-uhd_4096_2160_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-text-overlay">
            <h2>Meet the Chefs Who Bring Pizzazz to Every Bite</h2>
          </div>
        </div>
      </div>

      <MDBContainer className="about-us-chefs">
        <MDBRow className="justify-content-center">
          <MDBCol size="4" className="about-us-chef-card">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="../../../public/images/chefs/pexels-kampus-8629128.jpg"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Chef Marco Rossi - Head Chef</MDBCardTitle>
                <MDBCardText>
                  With over 15 years of experience in traditional Italian
                  cuisine, Chef Marco Rossi brings authenticity and passion to
                  the kitchen. He specializes in crafting classic Neapolitan
                  pizzas and believes that the secret to a perfect pizza lies in
                  the quality of the ingredients. Marco is known for his
                  dedication to sourcing local produce and his love for culinary
                  innovation.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="about-us-chef-card">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="../../../public/images/chefs/pexels-unpoquitodefoto-27870594.jpg"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Chef Lucia Conti - Sous Chef</MDBCardTitle>
                <MDBCardText>
                  Chef Lucia Conti is a culinary virtuoso with a flair for
                  creating unique flavor combinations. With a background in
                  pastry arts, she adds a touch of sweetness to the savory
                  dishes at PizzazzBites. Lucia assists Chef Marco in the
                  kitchen and is responsible for developing new pizza recipes
                  that surprise and delight our customers.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="about-us-chef-card">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="../../../public/images/chefs/pexels-kampus-6605192.jpg"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Chef Alessandro Vitale - Pizza Chef</MDBCardTitle>
                <MDBCardText>
                  Known for his playful approach to pizza-making, Chef
                  Alessandro Vitale has a talent for crafting visually stunning
                  and delicious pizzas. With a focus on seasonal ingredients, he
                  experiments with toppings that reflect the changing seasons.
                  Alessandro's creativity shines through in his signature
                  dishes, making him a favorite among PizzazzBites regulars.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="about-us-chef-card">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="../../../public/images/chefs/pexels-antonius-ferret-6223164.jpg"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Chef Sofia Marino - Line Cook</MDBCardTitle>
                <MDBCardText>
                  Chef Sofia Marino is an emerging talent in the culinary world,
                  bringing fresh energy and enthusiasm to the PizzazzBites
                  kitchen. As a line cook, she excels in preparing fresh
                  ingredients and assisting with pizza assembly. Her attention
                  to detail and commitment to quality ensure that every pizza is
                  a work of art.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="about-us-chef-card">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="../../../public/images/chefs/pexels-shvetsa-5953501.jpg"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>
                  Chef Giovanni Bianchi - Head of Culinary Operations
                </MDBCardTitle>
                <MDBCardText>
                  With a rich family history in the restaurant industry, Chef
                  Giovanni Bianchi oversees all culinary operations at
                  PizzazzBites. His leadership and expertise ensure that every
                  dish meets the highest standards of taste and presentation.
                  Giovanni is dedicated to mentoring young chefs in the kitchen,
                  fostering a culture of creativity and excellence.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AboutUs;

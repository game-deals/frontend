import "./news.css";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardText,
  MDBCardTitle,
  MDBRipple,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import NavBars from "../NavBar/NavBars";

function News() {
  const [moviesdata, setMoviesData] = useState([]);

  const getAllMovies = () => {
    const serverURL = `http://localhost:3005/trending`;

    fetch(serverURL).then((response) => {
      response.json().then((data) => {
        setMoviesData(data);
      });
    });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      <NavBars />
      <Header/>
      {moviesdata.map((item, index) => {
        if (!item.urlToImage) {
          return null;
        }
        if (index % 2 != 0) {
          return (
            <>
              <div id="poster2">
                <div id="sub-poster">
                  <h3 style={{ color: "white" }}>{item.title}</h3>
                  <h4 style={{ color: "#9A9A9A" }}>{item.description}</h4>
                  <Link to={item.url}>
                    <Button 
                      variant="top"
                      style={{ backgroundColor: "white", width: "50%" }}
                    >
                     Read More
                    </Button>
                  </Link>
                </div>
                <MDBCarousel
                  showIndicators
                  showControls
                  fade
                  style={{ width: "60%", marginRight: "auto" }}
                >
                  <MDBCarouselItem
                   itemId={1}
                    src={item.urlToImage}
                    alt="..."
                  ></MDBCarouselItem>
                </MDBCarousel>

              </div>
            </>
          );
        } 
          return (
            <div style={{backgroundColor:"black",width:"100%"}}>
              <div id="poster2">
                <MDBCarousel
                  showIndicators
                  showControls
                  fade
                  style={{ width: "60%", marginRight: "auto"  }}
                >
                  <MDBCarouselItem
                    itemId={1}
                    src={item.urlToImage}
                    alt="..."
                  ></MDBCarouselItem>
                </MDBCarousel>

                <div id="sub-poster">
                  <h3 style={{ color: "white" }}>{item.title}</h3>
                  <h4 style={{ color: "#9A9A9A" }}>{item.description}</h4>
                  <Link to={item.url}>
                    <Button
                      variant="top"
                      style={{ backgroundColor: "white", width: "50%" }}
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* <a href={item.url}>
            {" "}
            <CardGroup>
              {" "}
              <MDBCard background="dark" className="text-white">
                <MDBCardImage overlay src={item.urlToImage} alt="..." />{" "}
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                ></div>
                <MDBCardOverlay>
                  <MDBCardTitle style={{ textAlign: "center" }}>
                    {" "}
                    <h1>{item.title}</h1>
                  </MDBCardTitle>
                  <MDBCardText style={{ textAlign: "center" }}>
                    <p> {item.description}</p>
                  </MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
            </CardGroup>{" "}
          </a> */}
            </div>
          );
      })}
    </>
    );
}

export default News;

import "./news.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import NavBars from "../NavBar/NavBars";
import Footer from "../Footer/Footer";

function News() {
  const [moviesdata, setMoviesData] = useState([]);

  const getAllMovies = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

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

      {moviesdata.map((item, index) => {
        if (index < 15) {
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
            <div style={{ backgroundColor: "black", width: "100%" }}>
              <div id="poster2">
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
            </div>
          );
        }
      })}
      <Footer />
    </>
  );
}

export default News;

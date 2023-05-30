import { useEffect, useState } from "react";
import "./favDeals.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBars";
import { Link } from "react-router-dom";
import ModalGamesUpdate from "../ModalGames/ModalGamesUpdate";
import { Card } from "react-bootstrap";

export default function FavDeals(props) {
  const [favArrGame, setFavArrGame] = useState([]);
  const [gamesdata, setgamessdata] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const [clickedgames, setclickedgames] = useState({});

  function allFavData(arr) {
    setgamessdata(arr);
  }
  const handleShow = (item) => {
    // console.log(item)
    setclickedgames(item);
    setShowFlag(true);
  };
  const handleClose = () => {
    setShowFlag(false);
  };

  const getFavGame = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getFav`;
    fetch(serverURL).then((response) => {
      response.json().then((data) => {
        setFavArrGame(data);
      });
    });
  };
  const deleteFavGame = (item) => {
    console.log("delete obj", item);
    const serverURL = `${process.env.REACT_APP_serverURL}/delete/${item.id}`;
    axios
      .delete(serverURL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFavGame();
    setgamessdata(favArrGame);
  }, [favArrGame]);

  return (
    <>
      <NavBar />

      <div id="div-All-deals">
        <h2 id="Deals">Favorite Deals</h2>
        <div className="div-card">
          {gamesdata.map((item, index) => {
            let urlsteam = `http://store.steampowered.com/app/${item.steamAppID}/`;
            let url = `/${item.title}`;
            if (index < 26 && index !== 0 && index !== 11) {
              return (
                <Card className="card" key={index}>
                  <Link
                    to={urlsteam}
                    variant="white"
                    style={{ width: "100%", padding: 0 }}
                  >
                    <div>
                      <Card.Img src={item.thumb} />
                    </div>
                  </Link>
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Card.Title className="title">
                        <h4
                          style={{
                            color: "black",
                            fontFamily: "Roboto, sans-serif;",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          {item.title}
                        </h4>
                      </Card.Title>

                      <Link
                        to={url}
                        variant="white"
                        style={{
                          color: "black",
                          fontFamily: "Roboto, sans-serif;",
                          fontSize: "22px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        <Card.Text style={{ display: "flex" }}>
                          Rivew: {item.comment}
                        </Card.Text>
                      </Link>
                      <br />
                    </div>

                    <div
                      style={{ display: "flex", gap: "15px", width: "100%" }}
                    >
                      <Button
                        style={{ marginLeft: "auto", marginTop: "auto" }}
                        variant="dark"
                        onClick={() => {
                          handleShow(item);
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteFavGame(item);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <ModalGamesUpdate
        showFlag={showFlag}
        clickedgames={clickedgames}
        handleClose={handleClose}
        allFavData={allFavData}
      />

      <Footer />
    </>
  );
}

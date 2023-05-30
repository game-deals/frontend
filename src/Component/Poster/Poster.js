import React from "react";
import "./Poster.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Poster() {
  try {
    return (
      <div id="poster">
        <MDBCarousel
          showIndicators
          showControls
          fade
          style={{ width: "40%", marginRight: "auto" }}
        >
          <MDBCarouselItem
            itemId={1}
            src="https://images2.alphacoders.com/597/597965.jpg"
            alt="..."
          ></MDBCarouselItem>

          <MDBCarouselItem
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700949284.jpg"
            alt="..."
          >
            <h5>survival games</h5>
            <p>War… War Never Changes</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            itemId={3}
            src="https://images-ext-1.discordapp.net/external/tAYUbqTAV7UrX6zc4BK6gelJ9dscIOZIW5Wi48628lM/https/images8.alphacoders.com/601/601898.png?width=1072&height=670"
            alt="..."
          >
            <h5>shooters games</h5>
            <p>I Don't Need A Weapon; My Friends Are My Power!</p>
          </MDBCarouselItem>
        </MDBCarousel>

        <div id="sub-poster">
          <h3 style={{ color: "white" }}>BLACK OPS III</h3>
          <h4>
            {" "}
            Welcome to 2065. A new breed of Black Ops soldier emerges and the
            lines are blurred between our own humanity and the cutting-edge
            military robotics that define the future of combat.
          </h4>
          <Link to="https://store.steampowered.com/app/311210/Call_of_Duty_Black_Ops_III/">
            <Button
              variant="top"
              style={{ backgroundColor: "white", width: "50%" }}
            >
              Download Now
            </Button>
          </Link>
        </div>
      </div>
    );
  } catch (error) {}
}

export default Poster;

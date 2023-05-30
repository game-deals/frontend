import "./Header.css";
import { MDBBtn } from "mdb-react-ui-kit";
function Header() {
  return (
    <div id="header">
      <div id="sub-header">
        <h4 style={{ color: " #9A9A9A" }}>
          Games Deal is a price comparison website for digital PC Games. We keep
          track of prices across multiple stores including Steam,and you can
          show the news about the games , select a game Favorite and{" "}
          <span style={{ color: "white" }}>let's start the first deal.</span>
        </h4>
      </div>
      <a href="#Deals">
        <MDBBtn
          color="light"
          outline
          size="lg"
          className="m-2"
          rel="nofollow"
          target="_blank"
        >
          Show deals
        </MDBBtn>
      </a>
    </div>
  );
}

export default Header;

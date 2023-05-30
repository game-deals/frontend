import "./UboutUs.css";

import { MDBBtn } from "mdb-react-ui-kit";

import { useEffect, useState } from "react";

import NavBars from "../NavBar/NavBars";
import Footer from "../Footer/Footer";
function AboutUS() {
  const [moviesdata, setMoviesData] = useState([]);

  const getAllMovies = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getAboutData`;

    fetch(serverURL).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setMoviesData(data);
      });
    });
  };

  useEffect(() => {
    
  }, []);

  return (
    <>
      <NavBars />
      <div id="header">
        <div id="sub-header">
          <h4 style={{ color: "white" }}>
            <em>
              <i>
                Our vision to this project to make it easier for the gamers to
                find the best game deals . This project was made by our team in
                the project week, if you want to contact us use the link below
              </i>
            </em>
          </h4>
        </div>
      </div>

      <div className="bodyAboutUs">
        

            <div class="divcontenar">
              <img class="imgperson" src={"https://scontent.famm3-1.fna.fbcdn.net/v/t39.30808-6/284596804_538787131114922_5993361037966417191_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7PbYWbeA9KcNjzzt6H95jVW9W-O3DN5hVb1b47cM3mAhkgE2JKH1izIerdk2nAJao2Gug1-xRNDtllDgaoX2o&_nc_ohc=MkSNX5roKygAX9q9BV0&_nc_zt=23&_nc_ht=scontent.famm3-1.fna&oh=00_AfAp7-MaqX4Ht0okZzDkocs4NbiyFv9nLZDNcL2TLbRoNg&oe=64768469"} alt="person img" />
              <p class="name">Osama Alkarmy </p>
           
              <div>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="https://www.linkedin.com/in/osama-alkarmi-674566251/"
                  role="button"
                >
                  <i class="fa-brands fa-linkedin fa-beat"></i>
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="mailto:osama.alkarmi20@outlook.com "
                  role="button"
                >
                  <i class="fa-regular fa-envelope fa-beat"></i>
                </MDBBtn>
              </div>
              
            </div>
          
            <div class="divcontenar">
              <img class="imgperson" src={"https://avatars.githubusercontent.com/u/122972754?v=4"} alt="person img" />
              <p class="name">Hasan Mufdy </p>
              <div>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href=""
                  role="button"
                >
                  <i class="fa-brands fa-linkedin fa-beat"></i>
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="mailto:h.mufdy@gmail.com "
                  role="button"
                >
                  <i class="fa-regular fa-envelope fa-beat"></i>
                </MDBBtn>
              </div>
              
            </div>
            <div class="divcontenar">
              <img class="imgperson" src={"https://scontent.fadj1-1.fna.fbcdn.net/v/t39.30808-6/325411065_736345798004041_6615514619776005869_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMp6Lov91y1NzsZYfsk0tShQMmC0grk2aFAyYLSCuTZjN13Ns-cOxz6pzgZlQPc3g8nToL2am7_qOiBQuZ2tnQ&_nc_ohc=1xZ_mLsFXWgAX_NjHrV&_nc_ht=scontent.fadj1-1.fna&oh=00_AfBjb3EFMJ4l-cbYDKsONMtEfthh5E37uawwSzPWkbR2Wg&oe=647754DB"} alt="person img" />
              <p class="name"> Abdelrahman Shaheen </p>
           
              <div>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="https://www.linkedin.com/in/abdelrahmanshaheen/"
                  role="button"
                >
                  <i class="fa-brands fa-linkedin fa-beat"></i>
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="mailto: a.shaheen20001@gmail.com "
                  role="button"
                >
                  <i class="fa-regular fa-envelope fa-beat"></i>
                </MDBBtn>
              </div>
              
            </div>
            <div class="divcontenar">
              <img class="imgperson" src={"https://scontent.famm3-1.fna.fbcdn.net/v/t39.30808-6/330854624_556396599853234_4597427179034795173_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEk0TWYSDbinUlEOVCNRSrl52zULJpDM4vnbNQsmkMzixBQHQogMoSxCFAH1ukOxOD5DWXmiFDgBHtdYeew6nc3&_nc_ohc=_YaXHJJfPIwAX_sVfrd&_nc_zt=23&_nc_ht=scontent.famm3-1.fna&oh=00_AfCS7_06LNqbHKv3J0plsN5aFTp2iz1VB1A61pb9jqBsKg&oe=6477660B"} alt="person img" />
              <p class="name">Tasneem Alabed </p>
              <div>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="https://www.linkedin.com/in/tsneem-alabedd-1959b0257/"
                  role="button"
                >
                  <i class="fa-brands fa-linkedin fa-beat"></i>
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="mailto:tsneemabedd@gmail.com "
                  role="button"
                >
                  <i class="fa-regular fa-envelope fa-beat"></i>
                </MDBBtn>
              </div>
              
            </div>
            <div class="divcontenar">
              <img class="imgperson" src={"https://scontent.famm3-2.fna.fbcdn.net/v/t39.30808-6/269299522_3223562387898841_6106135201339297178_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHGgShukmjvf6jB35mlpAERLWH2sIkDpqstYfawiQOmqylRrSdJvVgIUDOzFez9FHhbcEb2HHYrJBa4WKRLJxGv&_nc_ohc=rvQh8nxx-JMAX9Za3Om&_nc_zt=23&_nc_ht=scontent.famm3-2.fna&oh=00_AfBuI7ZfgN-GUzB9zQEdNCe9srL5dsHwPF5F1gfFVHEKDg&oe=64779A3E"} alt="person img" />
              <p class="name">Bashar Shehadeh </p>
           
              <div>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="https://www.linkedin.com/in/bashar-nidal/"
                  role="button"
                >
                  <i class="fa-brands fa-linkedin fa-beat"></i>
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  className="m-1"
                  href="mailto:bashar0nidal@gmail.com "
                  role="button"
                >
                  <i class="fa-regular fa-envelope fa-beat"></i>
                </MDBBtn>
              </div>
              
            </div>
        
      </div>
      <Footer />
    </>
  );
}

export default AboutUS;

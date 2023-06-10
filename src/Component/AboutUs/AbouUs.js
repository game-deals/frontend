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
              <img class="imgperson" src={"https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/284596804_538787131114922_5993361037966417191_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7AGFskfROoYAX-PAKNq&_nc_ht=scontent.famm6-1.fna&oh=00_AfDq12wOos_nb_cGBulbnU0kNoe6MiDiZ5MlR1katz6FdQ&oe=648A4AE9"} alt="person img" />
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
              <img class="imgperson" src={"https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/325411065_736345798004041_6615514619776005869_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JdCKupQGQJ8AX-ZEXRC&_nc_ht=scontent.famm6-1.fna&oh=00_AfAw1nWjTjbl0p5wOsPB7G0FIH0EruoV8b5vfbLiroXacg&oe=6489211B"} alt="person img" />
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
              <img class="imgperson" src={"https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200:*"} alt="person img" />
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
              <img class="imgperson" src={"https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/269299522_3223562387898841_6106135201339297178_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DvQqHhXlgcQAX9JhitN&_nc_ht=scontent.famm6-1.fna&oh=00_AfDWPngLKMMT2BXJeiKdUrwlkBV4Ot8FhlG11dIivvX7Tw&oe=6489667E"} alt="person img" />
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

import React from "react";
import { MDBFooter, MDBCol, MDBRow, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div style={{ width: "100%" }}>
      <MDBFooter
        style={{ padding: "20px", backgroundColor: "#2a2a2a" }}
        className=" text-center text-white"
      >
        <section className="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto">
              <p className="pt-2">
                <strong>Your Feedback</strong>
              </p>
            </MDBCol>

            <MDBCol size="auto">
              <MDBBtn
                style={{ height: "40px", color: "white" }}
                color="black"
                type="submit"
                className="mb-4 dark-border-button"
              >
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="mailto:a.shaheen20001@.com"
                >
                  Send on Email
                </a>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="mb-4">
          <p>
            We thank ASAC for giving us the opportunities in this course to make
            this Website .
          </p>
        </section>
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://www.facebook.com/ASAC.LTUC"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://www.ltuc.com/"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://www.instagram.com/ltuc.jo/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://www.linkedin.com/company/ltuc/?originalSubdomain=jo"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://github.com/LTUC"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright &nbsp;
          <a
            className="text-white"
            href="https://github.com/orgs/game-deals/repositories"
          >
            GamesDeals.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

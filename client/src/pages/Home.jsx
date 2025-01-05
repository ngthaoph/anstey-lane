import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../components/layout/Carousel";
import AlButton from ".././components/common/AlButton";
import wave from "../assets/images/wave.svg";
const Home = () => {
  return (
    <Fragment>
      <Container style={{ display: "flex", maxWidth: "100%" }}>
        <div style={{ flex: "1" }}>
          <Carousel />
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;

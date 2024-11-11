import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../components/layout/Carousel";
import AlButton from ".././components/common/AlButton";
import wave from "../assets/images/wave.svg";
const Home = () => {
  return (
    <Fragment>
      <Container style={{ display: "flex", padding: 0, margin: "none" }}>
        <div style={{ flex: "1" }}>
          <Carousel />
        </div>
      </Container>
      <img src={wave} />
    </Fragment>
  );
};

export default Home;

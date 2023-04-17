import React, { Component } from "react";
import gsap from "gsap";
import styled from "styled-components";

type Props = {};

type State = {};

export default class MovingLogo extends Component<Props, State> {
  state = {};

  

  render() {

    function getRandomInt(max: number) {
      const generatedNumber = Math.floor(Math.random() * max);

      if(generatedNumber < 75){
        return (generatedNumber * -1)
      }else{
        return generatedNumber
      }
    }

    const moveElement = () => {
      gsap.to("#moving-logo", { x: getRandomInt(120), y: getRandomInt(74), duration: 0.1 });
    }

    return <Main>
      <span id="moving-logo" onMouseOver={moveElement}>MEMORY</span>
    </Main>;
  }
}

const Main = styled.div`
  color: white;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

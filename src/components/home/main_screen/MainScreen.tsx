import React, { Component } from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

type State = {
  titleEffect: string;
  iteration: number;
};

export default class MainScreen extends Component<Props, State> {
  state = {
    titleEffect: this.props.title,
    iteration: 0,
  };

  render() {
    const { title } = this.props;

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    const TextEffect = () => {
      let originalWord = this.state.titleEffect;
      let modifyWord = this.state.titleEffect.split("");
      const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];

      if (this.state.iteration >= 1) return;

      const interval = setInterval(() => {
        for (let index = 0; index < originalWord.length; index++) {
          modifyWord[index] = letters[getRandomInt(26)];
          let changedWord = modifyWord.join("");
          this.setState({ titleEffect: changedWord });
        }
        this.setState((prevState) => ({ iteration: prevState.iteration + 1 }));
        if (this.state.iteration == 10) {
          let splittedOriginalWord = originalWord.split("");
          for (let index = 0; index < originalWord.length; index++) {
            modifyWord[index] = splittedOriginalWord[index];
            let changedWord = modifyWord.join("");
            this.setState({ titleEffect: changedWord });
          }
          this.setState({ iteration: 0 });
          clearInterval(interval);
        }
      }, 20);
    };

    return (
      <Main>
        <span onMouseEnter={TextEffect}>{this.state.titleEffect}</span>
      </Main>
    );
  }
}

const Main = styled.div`
  color: white;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items:center;
  border: 1px solid white;
`;

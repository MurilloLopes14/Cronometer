//* Styles
import {
  Container,
  Text,
  Image,
  ButtonsContainer,
  OpacityButton,
  ButtonText,
  TimerText,
} from "./TimerStyle";

import React, { Component } from "react";

export default class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      last: 0,
    };

    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 });
      }, 100);
    }
  }

  stop() {
    if (this.timer != null) {
      clearInterval(timer);
      this.timer = null;
    } else {
      this.setState({
        last: this.state.number,
        number: 0,
      });
    }
  }
  render() {
    return (
      <>
        <Container>
          <Text>Cronometer</Text>
          <Image source={require("../img/cronometro.png")} />
          <TimerText>{this.state.number.toFixed(2)}</TimerText>
          <ButtonsContainer>
            <OpacityButton onPress={this.start}>
              <ButtonText>Iniciar</ButtonText>
            </OpacityButton>
            <OpacityButton onPress={this.stop}>
              <ButtonText>Parar/Limpar</ButtonText>
            </OpacityButton>
          </ButtonsContainer>
          <Text>Último contador: {this.state.last.toFixed(2)}</Text>
        </Container>
      </>
    );
  }
}

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #777;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Text = styled.Text`
  color: aliceblue;
  font-weight: bold;
  font-size: 20px;
`;

export const Image = styled.Image`
  width: 180px;
  height: 220px;
`;

export const TimerText = styled.Text`
  font-size: 40px;
  color: aliceblue;
  font-weight: bold;
  position: absolute;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const OpacityButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: aliceblue;
  font-weight: bold;
  text-align: center;
`;

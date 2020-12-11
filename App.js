import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Game from './Game';

class App extends React.Component {
  state = {
    gameId: 1,
  };
  resetGame = () => {
    this.setState((prevState) => {
      return { gameId: prevState.gameId + 1 };
    });
  };
  render() {
    return (
      // <Game
      //   key={this.state.gameId}
      //   onPlayAgain={this.resetGame}
      //   randomNumberCount={6}
      //   initialSeconds={10}
      // />
      <View style={styles.contain}></View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: "#ddd",
    flex: 1,
  },
});

export default App;

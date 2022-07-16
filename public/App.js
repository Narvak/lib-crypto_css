import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal, style.header]}>
<html lang="fr">
	<body>
	<header>
        <a href="">
            <h1>lorem ipsum</h1>
        </a>
        <a href="#">
            <button class="btn_nav button">Home</button>
        </a>
        <a href="#">
            <button class="btn_nav button">Service</button>
        </a>
        <a href="#">
            <button class="btn_nav button">Contact</button>
        </a>
        <a href="#">
            <button class="btn_nav btn_right button">About &rarr;</button>
        </a>
    </header>
      <div id="">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Suscipit in voluptatum asperiores quo illo, <br />
          iste minus. <br />
          Nisi, <br />
          ratione ex quisquam deleniti ducimus tempore natus alias ut dolor molestiae, <br />
          et voluptates. <br />
        </p>
      </div>

      <div id="">
      </div>

      <div id="">
      </div>

      <div id="">
      </div>

	<footer>
    <button class="button-mode" onclick="darkmode(this)">Dark-mode</button>
    <button class="button-mode" onclick="bluemode(this)">Blue-mode</button>
    <button class="button-mode" onclick="redmode(this)">Red-mode</button>

    <button class="button-mode" onclick="brownmode(this)">Brown-mode</button>
    <button class="button-mode" onclick="yellowmode(this)">Yellow-mode</button>
    <button class="button-mode" onclick="greenmode(this)">Green-mode</button>

    <button class="button-mode" onclick="cyanmode(this)">Cyan-mode</button>
    <button class="button-mode" onclick="magentamode(this)">Magenta-mode</button>
    <button class="button-mode" onclick="beigemode(this)">Beige-mode</button>

    <button class="button-mode" onclick="violetmode(this)">Violet-mode</button>
    <button class="button-mode" onclick="goldmode(this)">Gold-mode</button>
    <button class="button-mode" onclick="silvermode(this)">Silver-mode</button>
  </footer>

</body>
</html>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    display: "flex",
    flexDirection: "col",
    justifyContent: "space-around",
    padding: 10,
  },


});



export default App;
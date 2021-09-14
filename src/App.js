import React from "react";

import { Cards } from "./components";
import styles from "./App.module.css";
import covidImage from "./images/covidImage.png";
import covidInfo from "./images/covidInfo.png";

import fetchData from "./api/index";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetcheddata = await fetchData();

    this.setState({ data: fetcheddata });
    console.log(fetcheddata);
  }
  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img src={covidImage} className={styles.covidImage} alt="COVID-19" />
        <Cards data={data}></Cards>
        <div>
          <img src={covidInfo} className={styles.covidInfo} alt="COVID-19" />
        </div>
      </div>
    );
  }
}

export default App;

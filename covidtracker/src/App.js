import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
// import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './apiCall/apiCalls';
import CountryDatePicker from "./components/CountryDatePicker";
import Cards from './components/Cards';
import Charts from './components/Chart';
// import styles from './App.module.css';

// import image from './images/covid.jpg';
const { Header, Footer } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
    }


  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    console.log("handle", country)
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <center><h1 style={{ color: 'white' }}>COVID-19 TRACKER</h1></center>
          </Header>
        </Layout>
        <br /><br /><br /><br />
        <center><CountryDatePicker handleCountryChange={this.handleCountryChange} /></center>
        <Cards data={data} />
        <br />
        <br />
        <center><Charts data={data} country={country} /></center>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>COVID-19 Tracker made-by@chitra</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;

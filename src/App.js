import React, { Component } from "react";
import Prismic from "prismic-javascript";
import PageTitle from "./components/Title";
import SliceOne from "./components/SliceOne";
import SliceTwo from "./components/SliceTwo";
import SliceThree from "./components/SliceThree";
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse:null
    };
 }
 
  
  componentDidMount() {
    const apiEndPoint = "https://aboutusex.cdn.prismic.io/api/v2";
    const accessToken = "MC5YTzd1UEJBQUFMRFJjNjFh.77-9cH8q77-977-977-9JO-_ve-_vTMV77-9cRTvv702Eu-_vSETX3Xvv73vv73vv73vv70V77-977-9V0A";

    Prismic.api(apiEndPoint,{accessToken} ).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'information'))
      .then(response => {
        if (response) {
           //console.log("res is ",response);
            this.setState({apiResponse:response.results[0].data});
           }
          }).catch(error=>error)
    });
  }

render() { 
  if (this.state.apiResponse) {
    
    return (
      <div className="App">
        <PageTitle apiResponse={this.state.apiResponse}/>
        <SliceOne apiResponse={this.state.apiResponse}/>
        <SliceTwo apiResponse={this.state.apiResponse}/>
        <SliceThree apiResponse={this.state.apiResponse}/>
      </div>
    );
  };
 return <h1>Loading...</h1>;
}
}

export default App;

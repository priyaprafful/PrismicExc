import React, { Component } from "react";
import Prismic from "prismic-javascript";
import PageTitle from "./components/Title";
import ImageSlice from "./components/SliceOne";
import SliceTwo from "./components/SliceTwo";
import SliceThree from "./components/SliceThree";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <PageTitle />
//       <ImageSlice />
//       <SliceTwo />
//       <SliceThree/>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiEndPoint :"https://aboutusex.cdn.prismic.io/api/v2",
      accessToken :"MC5YTzd1UEJBQUFMRFJjNjFh.77-9cH8q77-977-977-9JO-_ve-_vTMV77-9cRTvv702Eu-_vSETX3Xvv73vv73vv73vv70V77-977-9V0A",
      apiResponse:null
    };
 }
 
  
  componentDidMount() {
    const apiEndPoint = "https://aboutusex.cdn.prismic.io/api/v2";
    const accessToken = "MC5YTzd1UEJBQUFMRFJjNjFh.77-9cH8q77-977-977-9JO-_ve-_vTMV77-9cRTvv702Eu-_vSETX3Xvv73vv73vv73vv70V77-977-9V0A";

    Prismic.api(apiEndPoint,{accessToken} ).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'information')).then(response => {
        if (response) {
           console.log("res is ",response);
            this.setState({apiResponse:response.results[0].data});

              }
          })
    });
  }

 
  

  render(){

    return (
          <div className="App">
            <PageTitle apiResponse={this.state.apiResponse}/>
           </div>
        );
  }
}

export default App;


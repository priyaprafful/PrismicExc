import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";
import Constants from "../appConstants"
class SliceTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: null,
      paragraph:null,
      width: null,
      height: null,
      url: null
    };
  }
  componentDidMount() {
    const apiEndpoint = "https://aboutusex.cdn.prismic.io/api/v2";
    const accessToken =
      "MC5YTzd1UEJBQUFMRFJjNjFh.77-9cH8q77-977-977-9JO-_ve-_vTMV77-9cRTvv702Eu-_vSETX3Xvv73vv73vv73vv70V77-977-9V0A";

    Prismic.api(apiEndpoint, { accessToken }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "information"))
        .then(response => {
          if (response) {
            console.log("response is", response);
            const sliceArray = response.results[0].data.body;
            //this.setState({  response.results[0].data.body,pagedescription:response.results[0].data.pagedescription});
            console.log(sliceArray);
            sliceArray.forEach(slice => {
              if (slice.slice_type === "description_and_image_slice") {
                  this.setState({
                    heading:slice.primary.slice2_heading[0].text,
                    paragraph:slice.primary.slice2_paragraph[0].text,
                    width: slice.primary.slice2_image.dimensions.width,
                      height: slice.primary.slice2_image.dimensions.height,
                      url: slice.primary.slice2_image.url,
                      
                  });
                 
              
                  
              }
            });
          }
        });
    });
  }

  render() {
     return(
        <div className="SliceTwoContent">
         
        <div className="SliceTwoDescription">
        <h1 className="SliceTwoHeading" >{(this.state.heading)}</h1>
        <p className="SliceTwoPara">{(this.state.paragraph)}</p>
        </div>
        <div>
        <img className="SliceTwoimg"
        src={this.state.url}
        height={this.state.height}
        width={this.state.width}
       />
       </div>
       </div>
     
      
    )


    
  }
}

export default SliceTwo;

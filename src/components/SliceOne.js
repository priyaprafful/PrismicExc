import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

class ImageSlice extends Component {
  constructor(props) {
    super(props);
    this.state = { width: null, height: null, url: null };
  }
  componentWillMount() {
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
              if (slice.slice_type == "image_slice") {
                this.setState({
                  width: slice.primary.imageslice1.dimensions.width,
                  height: slice.primary.imageslice1.dimensions.height,
                  url: slice.primary.imageslice1.url
                });
              }
            });
          }
        });
    });
  }

  render() {
    return (
      <img className="SliceOneimg" 
        src={this.state.url}
        height={this.state.height}
        width={this.state.width}
      />
    );
  }
}

export default ImageSlice;

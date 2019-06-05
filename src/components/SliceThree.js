import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

class SliceThree extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title:null,
            paragraph:null,
            widthOne: null,
            heightOne: null,
            urlOne: null,
            widthTwo: null,
            heightTwo: null,
            urlTwo: null,
            widthThree: null,
            heightThree: null,
            urlThree: null,
            
            

        }
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
                  if (slice.slice_type === "chronological_slice") {
                      this.setState({
                         title:slice.primary.title_slice_3[0].text,
                         paragraph:slice.primary.desc_slice_3[0].text,
                         widthOne: slice.items[0].imageslice3part1.dimensions.width,
                         heightOne: slice.items[0].imageslice3part1.dimensions.height,
                         urlOne: slice.items[0].imageslice3part1.url,
                         widthTwo: slice.items[0].imageslice3part2.dimensions.width,
                         heightTwo: slice.items[0].imageslice3part2.dimensions.height,
                         urlTwo: slice.items[0].imageslice3part2.url,
                         widthThree: slice.items[0].imageslice3part3.dimensions.width,
                         heightThree: slice.items[0].imageslice3part3.dimensions.height,
                         urlThree: slice.items[0].imageslice3part3.url
                        
                          
                      });
                     
                  
                      
                  }
                });
              }
            });
        });
      }
    
    render() { 
        return ( 
            <div className="SliceThreeContent">
            <div className="SliceThreeMain">
            <h1>{(this.state.title)}</h1>
            <p>{(this.state.paragraph)}</p>
            </div>
            
        <div className="SliceThreeImage">
          <img className="SliceThreeAllimg"
        src={this.state.urlOne}
        height={this.state.heightOne}
        width={this.state.widthOne}
       />
        <img className="SliceThreeAllimg"
        src={this.state.urlTwo}
        height={this.state.heightTwo}
        width={this.state.widthTwo}
       />
        <img className="SliceThreeAllimg"
        src={this.state.urlThree}
        height={this.state.heightThree}
        width={this.state.widthThree}
       />
       </div>
       </div>
        
         );
    }
}
 
export default SliceThree;
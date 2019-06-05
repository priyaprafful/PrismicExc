import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import {RichText} from 'prismic-reactjs';


class PageTitle  extends Component {
    constructor(props) {
        super(props);
        //console.log("api res ", this.props.apiResponse);
        this.state = { PageTitle:null,pagedescription:null
        }
    }

    // linkResolver(doc) {
    //  return '/information/' + doc.uid;
    // }

    componentDidMount() {
        const apiEndpoint = 'https://aboutusex.cdn.prismic.io/api/v2';
        const accessToken = 'MC5YTzd1UEJBQUFMRFJjNjFh.77-9cH8q77-977-977-9JO-_ve-_vTMV77-9cRTvv702Eu-_vSETX3Xvv73vv73vv73vv70V77-977-9V0A';
 
        Prismic.api(apiEndpoint, {accessToken}).then(api => {
        api.query(Prismic.Predicates.at('document.type', 'information')).then(response => {
        if (response) {
          //console.log("response is", response)
          this.setState({ PageTitle: response.results[0].data.pagetitle,pagedescription:response.results[0].data.pagedescription});
          console.log(response.results[0].data.pagetitle)
      }
    });
  });
}
  render() { 
      //this.setTitle();
        if (this.state.PageTitle,this.state.pagedescription) {
           // const document = this.state.doc.data;
            return (
              <div className="titlePage">
                <h1 className="pageHeading">{RichText.asText(this.state.PageTitle)}</h1>
                <h6 className="pagepara">{RichText.asText(this.state.pagedescription)}</h6>
                {/* <img alt="cover" src={document.image.url} />
                {RichText.render(document.description, this.linkResolver)} */}
              </div>
            );
          }
          return <h1>Loading...</h1>;
        }
      }

 
export default PageTitle;
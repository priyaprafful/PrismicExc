import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import {RichText} from 'prismic-reactjs';


class PageTitle  extends Component {
  constructor(props) {
      super(props);
     // console.log("api res ", this.props.apiResponse);
      this.state = { PageTitle:null,pagedescription:null
                   }
  }

  // linkResolver(doc) {
  //  return '/information/' + doc.uid;
  // }

  componentDidMount() {
  const response = this.props.apiResponse;
  console.log("response 2 ", response)
    if (response) {
          console.log("response is", response)
        this.setState({ PageTitle: response.results[0].data.pagetitle,pagedescription:response.results[0].data.pagedescription});
        console.log(response.results[0].data.pagetitle)
      }
    }
  render() { 
      if (this.state.PageTitle,this.state.pagedescription) {
         // const document = this.state.doc.data;
          return (
            <div>
              <h1>{RichText.asText(this.state.PageTitle)}</h1>
              <h6>{RichText.asText(this.state.pagedescription)}</h6>
              {/* <img alt="cover" src={document.image.url} />
              {RichText.render(document.description, this.linkResolver)} */}
            </div>
          );
        }
        return <h1>Loading...</h1>;
      }
  }


export default PageTitle;
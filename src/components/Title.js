import React from 'react'
import { RichText } from 'prismic-reactjs'

const PageTitle = ({ apiResponse }) => {
  //console.log('apiResponse', apiResponse);
  return (
    <div className="mainPage">
      <h1 className="mainPageHeading">{RichText.asText(apiResponse.pagetitle)}</h1>
      <h6 className="mainPagePara">{RichText.asText(apiResponse.pagedescription)}</h6>
    </div>
  );
}

export default PageTitle
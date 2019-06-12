import React from "react";
import {RichText} from "prismic-reactjs";

const SliceTwo = ({apiResponse})=>{
    var sliceArray = null;
    sliceArray = apiResponse.body.map(function(slice, sliceIndex){
         console.log("slice 2 is", slice)
         if (slice.slice_type==="description_and_image_slice"){
             const galleryContent = slice.items.map(function(galleryItem,galleryIndex){
                 return <img src ={galleryItem.slice_2_image.url} key ={galleryIndex}  className="sliceTwo-image"/>
             })
             return (
                <div className="sliceTwo-content" key={sliceIndex}>
                    <div className="sliceTwo-text">
                  <h2 className="sliceTwo-title">
                    {RichText.asText(slice.primary.slice2_heading)}
                  </h2>
                  <p className="sliceTwo-para">{RichText.asText(slice.primary.slice2_paragraph)}</p>
                  </div>
                  <div className="sliceTwo-gallery">
                  {galleryContent}
                  </div>
                </div>
              );
       
         }
         else{
            //if not image slice then return null to slice array 
            return null;
        }
    })

    if(sliceArray){
        return (<div> {sliceArray}</div>);
    } else{
        return <h1>no image and description available</h1>;
    }
    
    
}

export default SliceTwo;

import React from "react";
import {RichText} from "prismic-reactjs";

const SliceThree = ({apiResponse})=>{
    var sliceArray = null;
    sliceArray = apiResponse.body.map(function(slice, sliceIndex){
         console.log("slice 3 is", slice)
         if (slice.slice_type==="chronological_slice"){
             const galleryContent = slice.items.map(function(galleryItem,galleryIndex){
                 return(
                  <div key ={galleryIndex}>
                  <img src ={galleryItem.imageslice3part1.url} className="sliceThree-Image"/>
                  <img src ={galleryItem.imageslice3part2.url} className="sliceThree-Image"/>
                  <img src ={galleryItem.imageslice3part3.url}className="sliceThree-Image"/>
                  </div>
                 )
             })
             return (
                <div className="sliceThree-content" key={sliceIndex}>
                    <div>
                  <h2 className="sliceThree-heading">
                    {RichText.asText(slice.primary.title_slice_3)}
                  </h2>
                  <p className="sliceThree-heading">{RichText.asText(slice.primary.desc_slice_3)}</p>
                  </div>
                  <div>
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

export default SliceThree;
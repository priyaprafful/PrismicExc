import React from "react";

const SliceOne = ({ apiResponse }) => {
    console.log('apiResponse in slice one ', apiResponse);
    var sliceArray =null;
    // looping on map objects inside body
    sliceArray = apiResponse.body.map(function(slice){
        console.log("slice is ", slice);
        //check for each item of body and apply image slice loop
        if (slice.slice_type === 'image_slice') {
            var sliceImageArray = null;
            //next line is abouut apply map on the slice items and  append image html tags in case of multiple images
            sliceImageArray = slice.items.map(function(sliceImageItem,  imageIndex){
                console.log("slice Image item ",sliceImageItem);
                return <img src={sliceImageItem.imageslice1.url} key ={imageIndex} className="sliceOneImage"/>;
            })
            console.log("slice image array", sliceImageArray);
            return sliceImageArray;
            // return/assign sliceimagearay to slicearray
        }//end of image slice if check
        else{
            //if not image slice then return null to slice array 
            return null;
        }
    });// end of body map

    
    
    if(sliceArray){
        return (
        <div> 
          {sliceArray}
        </div>
        );
    } else{
        return <h1>no image available</h1>;
    }
    
  }
  
  export default SliceOne;

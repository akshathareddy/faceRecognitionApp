import React from 'react';

export const Facerecognition = ({imageUrl,isGenerateClicked,predictions}) =>{
    if(isGenerateClicked)
        return(
            <div className="flex justify-center ma2" width="250" height="auto">
                <img src= {imageUrl} alt="Url rendering w-70" />
                <ul className="shadow-5 w-10 ma0">{predictions}</ul>
            </div>
        )
    else
        return(
            <div className="ma2">{"Please enter a URL in the above TextBox!!!"}</div>
        );
}
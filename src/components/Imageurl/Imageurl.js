import React from 'react';

import './Imageurl.css';

export const Imageurl = ({updateUrl,generateImage}) =>{
    return(
            <div className="center w-40 pattern">
                <input className= "ma2" type="text" onChange={(e)=>updateUrl(e)}/>
                <button type="submit" onClick={()=>generateImage()}>Generate</button>
            </div>
        
    )
}
import React from 'react';

export const Navigation =({isSignedIn,onRouteChange})=>{
    if(isSignedIn)
        return(
            <nav className="flex-end">  
                <p className="pa2 pointer" onClick={() => onRouteChange('signin')}>Signout</p>
            </nav>
        )
    else
        return(
            <nav className="flex-end">
                <div className="pa2 pointer" onClick={()=>onRouteChange('signin')}>Signin </div>
                <div className="pa2 pointer" onClick={()=>onRouteChange('register')}>Register </div>
            </nav>
        )

}
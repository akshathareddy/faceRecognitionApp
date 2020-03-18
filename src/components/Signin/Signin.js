import React from 'react';

export const Signin =({onRouteChange})=>{
    return(
        <main className="pa4 black-80 shadow-5 w-50 center">
        <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center margin0-auto">Sign In</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib border-1-black-solid" 
                   type="submit" 
                   value="Login"
                   onClick = {()=>onRouteChange("home")}
            />
        </form>
</main>
    );
}
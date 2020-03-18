import React from 'react';

export const Register =({onRouteChange})=>{
    return(
        <article className="pa4 black-80 shadow-5 w-50 center">
            <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 ph0 mh0 fw6 margin0-auto center">Register</legend>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input className="pa2 input-reset ba b--black bg-transparent w-50 measure" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba b--black bg-transparent w-50" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                                            type="submit" 
                                            value="Register"
                                            onClick = {()=>onRouteChange("home")}
                                        />
                </div>
            </form>
        </article>
    );
}
import React from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import {Navigation} from './components/Navigation/Navigation';
import {Register} from './components/Register/Register';
import {Signin} from './components/Signin/Signin';

import {Logo} from './components/Logo/Logo';
import {Rank} from './components/Rank/Rank';
import {Imageurl} from './components/Imageurl/Imageurl';

import {PARAMS} from './constants';
import {Facerecognition} from './components/Facerecognition/Facerecognition';

const app = new Clarifai.App({apiKey: '571d4343e2d849b2864394f947f9653d'});
class App extends React.Component {
  constructor(){
    super();
    this.state={
      route: "signin",
      isSignedIn: false,
      imageUrl : "",
      predictions : [],
      isGenerateClicked: false
    }
  }
  onRouteChange = (route)=>{
    if(route==="home"){
      this.setState({
        isSignedIn: true
      })
    }
    else{
      this.setState({
        isSignedIn: false
      })
    }
    this.setState({
      route: route
    })
  }
  updateUrl = (event) =>{
    this.setState({
      imageUrl: event.target.value,
      isGenerateClicked: false
    })
  }

  generateImage = () =>{
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    .then(generalModel => {
      return generalModel.predict(this.state.imageUrl);
    })
    .then(response => {
      let concepts = response['outputs'][0]['data']['concepts'];
    let filteredArray = concepts.map(obj=>{
                          return(<li className="list" key={obj.id}>
                                        {obj.name}
                                 </li>)
    });
      this.setState({
        predictions: filteredArray,
        isGenerateClicked: true
      });
    })
  }
  


  render(){
    const {route,isSignedIn,imageUrl,isGenerateClicked,predictions} = this.state;
    return (
      <div className="App">
        <Particles className="zindex-neg-1" params={PARAMS}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {
          route==="home"
          ?
            <div>
              <Logo />
              <Rank />
              <Imageurl updateUrl={this.updateUrl} generateImage={this.generateImage}/>
              <Facerecognition imageUrl={imageUrl}
                               isGenerateClicked={isGenerateClicked} 
                               predictions={predictions}  
                               />
            </div>
          :
            (route==="signin"
            ? 
              <Signin onRouteChange={this.onRouteChange}/>
              :
              <Register onRouteChange={this.onRouteChange}/> )
        }    
      </div>
    );
  }
}

export default App;

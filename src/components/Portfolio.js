import React, { Component } from 'react';
import Coloredline from './ColoredLine';
import NucampsiteBootstrap from '../images/nucampsiteBootstrap.png';
import MurderbookBootstrap from '../images/murderbookBootstrap.png';
import NucampsiteReact from '../images/nucampsiteReact.png';
import MurderbookReact from '../images/murderbookReact.png';
import JSONServerHeroku from '../images/jsonserverHeroku.png';
import MurderbookReactnative from '../images/murderbookReactnative.png';

class Portfolio extends Component {
    render(){
        return(
            <div id="PortfolioSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                    <div class="column is-three-quarters">
                        <h1 class="title">Portfolio</h1>
                        <Coloredline color="grey"/>
                        <div class="columns is-centered">
                            <div class="column">
                            {/** tiles start here  --> ancester/parent/child heirarchy */}  
                            <div class="tile is-ancestor">
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                    <h2 class="subtitle">Nucampsite: Bootstrap</h2>
                                    <p class="subtitle">Website for reserving Nucampsites built in Bootstrap</p>
                                      <figure class="image is-1by1">
                                          <a href="https://lindseytaylor90.github.io/Nucampsite/">
                                              <br />
                                              <img
                                                  alt="screenshot of website"
                                                  src={NucampsiteBootstrap} 
                                              />
                                          </a> 
                                      </figure>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                    <h2 class="subtitle">Murderbook: Bootstrap</h2>
                                    <p class="subtitle">Social media Website for murder mystery enthusiasts built in Bootstrap</p>
                                      <figure class="image is-1by1">
                                          <a href="https://lindseytaylor90.github.io/murderbook/">
                                              <br />
                                              <img
                                                  alt="screen shot of website"
                                                  src={MurderbookBootstrap}
                                              />
                                          </a> 
                                      </figure>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                    <h2 class="subtitle">Nucampsite: React</h2>
                                    <p class="subtitle">Website for reserving Nucampsites built in React, uses JSON Server deployed with Heroku</p>
                                      <figure class="image is-1by1">
                                          <a href="https://lindseytaylor90.github.io/react-nucampsite/home">
                                              <br />
                                              <img
                                                  alt="screen shot of website"
                                                  src={NucampsiteReact}
                                              />
                                          </a> 
                                      </figure>
                                    </article>
                                </div>
                            </div>
                            {/** 2nd tile starts here */}
                             {/** tiles start here  --> ancester/parent/child heirarchy */}  
                             <div class="tile is-ancestor">
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                    <h2 class="subtitle">Murderbook: React</h2>
                                    <p class="subtitle">Social media Website for murder mystery enthusiasts built in React, uses JSON Server deployed with Heroku</p>
                                      <figure class="image is-1by1">
                                          <a href="https://lindseytaylor90.github.io/react-murderbook/">
                                              <br />
                                              <img
                                                  alt="screen shot of the website"
                                                  src={MurderbookReact}
                                              />
                                          </a> 
                                      </figure>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                    <h2 class="subtitle">JSON Server</h2>
                                    <p class="subtitle">JSON Server written for ajax calls, deployed on Heroku. Calls: /campsites, /partners, /comments, /promotions, /feedback </p>
                                      <figure class="image is-1by1">
                                          <a href="https://react-nucampsite-json-server.herokuapp.com/">
                                              <br />
                                              <img
                                                  alt="Screen shot of data objects"
                                                  src={JSONServerHeroku} 
                                              />
                                          </a> 
                                      </figure>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                    <h2 class="subtitle">Murderbook: React-native</h2>
                                    <p class="subtitle">This is a React website for showcasing screen shots of murderbook built in react-native. The application is a mobile verson of the Murderbook React website. React-native code: <a href="https://github.com/lindseytaylor90/react-native-murderbook">Click Here</a></p>
                                      <figure class="image is-1by1">
                                          <a href="https://lindseytaylor90.github.io/react-native-website/">
                                              <br />
                                              <img
                                                  alt="screen shot of website"
                                                  src={MurderbookReactnative}
                                              />
                                          </a> 
                                      </figure>
                                    </article>
                                </div>
                            </div> 
                            {/** tiles stop here  --> ancester/parent/child heirarchy */}  
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
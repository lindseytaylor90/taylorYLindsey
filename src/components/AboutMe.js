import React, { Component } from 'react';
//import ProfilePic from '../images/profilepic.jpg';
import ColoredLine from'./ColoredLine';
class AboutMe extends Component {
    render () {
        return(
            <div id="AboutSection">
            <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h2 class="title">About Me</h2>
                            <ColoredLine />
                            <div class="colimns is-8 is-three-quarters">
                                <figure class="image is-1byl">
                                    <img  src="" alt=""/>

                                </figure>

                            </div>
                            <div class="column" id="Intro">
                                <p>
                                 Hello, My name is Taylor Lindsey.
                                 I'm curently persuing a carrer in entry 
                                 level front end development. 
                                 In Summer of 2020 I decided to purse a 
                                 carrer in computre sience. I 
                                 enrolled in the NuCamp online course. 
                                 And completed xyz. My experience 
                                 includes but is not limited to frontend 
                                 development, working with React 
                                 native mobile apps, React single page 
                                 application and basic HTML web using 
                                 Bootstarp. Additional experinece in Json Server 
                                 and Ajaxs calls. I enjoy the constant learning, 
                                 challanges and skills that computer science
                                 has to offer. 
                                </p>

                            </div>
                            <div class="column" id="personal">
                                <h3>Hobbies of mine:</h3>
                                <br />
                                <ul>
                                    <li> Biking</li><br/>
                                    <li> Rafting </li><br/>
                                    <li> Gardening</li><br/>
                                    <li> Traveling </li><br/>
                                    <li> Reading</li><br/>
                                    <li> Camping</li><br/>
                                </ul>
                           </div>
                        </div>
                    </div>
                </div>
             </section>
            </div>
        );
    }
}

// exports the file/class
export default AboutMe; 
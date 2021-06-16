import React, { Component } from 'react';
import ColoredLine from'./ColoredLine';
import ProfilePic from '../images/jop.jpg';

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
                            <div class="columns is-8 is-three-quarters">
                                <figure class="image is-4by4" 
                                    style={{ marginRight: "auto", marginLeft: "auto", maxWidth: "220px" }}>
                                    <img  src={ProfilePic} alt=""/>

                                </figure>

                            </div>
                            <div class="column" id="Intro">
                                <p>
                                Hello, My name is Taylor Lindsey. I'm currently pursuing a career in entry level front end development. In the Summer of 2020 I decided to pursue a career in computer science. I enrolled in the NuCamp online course and completed the following courses; Bootstrap-HTML, React and React Native. My experience includes but is not limited to front end development, React native mobile apps, React single page applications and basic HTML web development using Bootstrap. Additional experience in JSON Server and Ajax calls. I enjoy the constant learning, challenges and problem solving opportunities that computer science has to offer.
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
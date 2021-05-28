import React, { Component } from 'react';
import ColoredLine from './ColoredLine';

class Education extends Component {

    // this draws to the screen
    render(){
        return(
            <div id="EducationSection">
                <section class="section is-large">
                    <div class="container">
                        <div class="columns is-center">
                         <div class="column is three-quaters" id="edu1">
                             <h1 class="title">Education</h1>
                             <ColoredLine />
                             <div style={{ marginBottom: "100px" }}>
                                <h2 class="subtitle"> Inter Mountain Medical Educator INC </h2>
                                <div class="columns is-centered">
                                    <p> EMT Certification <span class="blullet"></span></p>
                                </div>
                                <div class="columns is-centered">
                                    <p>Issued: April of 2021</p>
                                    
                                </div>
                             </div>
                             
                             <div>
                                <h2 class="subtitle">Amarillo College</h2>
                                <div class="columns is-centered">
                                    <p> Phlebotomy Certification <span class="blullet"></span></p>
                                </div>
                                <div class="columns is-centered">
                                    <p>Issued: August of 2016</p>
                                    
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


export default Education;

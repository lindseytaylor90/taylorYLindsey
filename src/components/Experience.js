import React,{ Component } from 'react';
import ColoredLine from './ColoredLine';

class Experience extends Component {
    render() {
        return(
            <div id="ExperienceSection">
                <section class="section is-meduim">
                <div class="contaier">
                <div class="columns is-centered">
                    <div class="column is-thre-quaters">
                        <h1 class="title">Experience</h1>
                      <ColoredLine />
                      <div class="columns is-centered">
                          <div class="column is-half">
                              <div class="box" id="exp1">
                                  <div class="content">
                                     <artical class="media">
                                      <p>
                                          <strong>Office Coordinator</strong> <medium>Bozeman Health</medium><br />
                                          <small>April 2020- Present</small><br />
                                          <ul>
                                            <li>Billing and Data Entry</li>
                                            <li>Scheduling Appointments </li>
                                            <li>Smooth Operation of Healthcare Facility </li>
                                            <li>Managing Patient Information</li>
                                          </ul>
                                      </p>
                                     </artical> 
                                  </div>
                              </div>
                              <div class="box" id="exp2">
                                  <div class="content">
                                     <artical class="media">
                                      <p>
                                          <strong>Hostest</strong> <medium>Uley's</medium><br />
                                          <small>November 2018- April 2019</small><br />
                                          <ul>
                                            <li>Escort Customers to and from the Restarunt location </li>
                                            <li>Hospotality responsibiliies like serveing Customers food and beverages</li>
                                            <li>Worked Banquest, wedding, school events, ect</li>
                                          </ul>
                                      </p>
                                     </artical> 
                                  </div>
                              </div>
                              <div class="box" id="exp3">
                                  <div class="content">
                                     <artical class="media">
                                      <p>
                                          <strong>Registration</strong> <medium>Dr. Moores Orthopedics Office</medium><br />
                                          <small>November 2018- April 2019</small><br />
                                          <ul>
                                            <li>Scheduling Appointments</li>
                                            <li>Managing Patient Information</li>
                                            <li>Plebotomy Duties</li>
                                          </ul>
                                      </p>
                                     </artical> 
                                  </div>
                              </div>
                              <div class="box" id="exp4">
                                  <div class="content">
                                     <artical class="media">
                                      <p>
                                          <strong>Phlebotomist</strong> <medium>Gunnison Valley Hospital</medium><br />
                                          <small> April 2019- November 2019</small><br />
                                          <ul>
                                            <li>Phlebotomist for inpatient and outpatients</li>
                                            <li>Logged Patient Informaion</li>
                                            <li>Packaged and shipped collected specimens</li>
                                          </ul>
                                      </p>
                                     </artical> 
                                  </div>
                              </div>
                              <div class="box" id="exp5">
                                  <div class="content">
                                     <artical class="media">
                                      <p>
                                          <strong>Bartender and Waiter</strong> <medium>Slogar Bar and Restaurant</medium><br />
                                          <small>November 2017- November 2018</small><br />
                                          <ul>
                                            <li>Full knowledge of bar and menu items</li>
                                            <li>Delivered quality food and bevrages</li>
                                            <li>Served mixed drinks, wine, beer and nonalcoholic beverages</li>
                                          </ul>
                                      </p>
                                     </artical> 
                                  </div>
                              </div>

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

export default Experience;
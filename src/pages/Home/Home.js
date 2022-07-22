import React from "react";
import "./home.css";
import * as MdIcon from "react-icons/md"
import ArrowRight from "../../images/rightarrow.png";
import PlanningIcon from "../../images/planning.png";
import ManagementIcon from "../../images/management.png";
import MonitoringIcon from "../../images/monitoring.png";
import SupportIcon from "../../images/support.png";
import AboutImage from "../../images/about_background_unsplash.jpg";
import Carousel from "../../components/Carousel/Carousel";
import ProjectBottomImageOne from "../../images/adeolu_eletu_unsplash.jpg";
import FRSCBodyCamProject from "../../images/FRSC_body_cam.jpg";
import Contactcomp from "../../components/ContactComp/Contactcomp";
// import DateImage from "../../images/date.png"

function Home(){
    return(
        <div className="homepage">
            <div className="intro_container">
                <div className="intro_container_inner">
                    <h1>
                        Let's Start 
                        Something
                        Big Together
                    </h1>
                   <div>
                        <p>
                            We help with concepts development, strategic planning, projects management, monitoring and evaluation, 
                            professional communications and brand support
                        </p>
                        <button>
                            Get In Touch <img className="rightarrowIcon" src={ArrowRight} alt="arrow icon"/>
                        </button>
                   </div>
                </div>
            </div>
            <div className="features">
                <div className="inner_features">
                    <h2 className="features_heading">Features</h2>
                    <div className="inner_features_intro">
                        <h1>
                            We are the best agency to improve your business
                        </h1>
                        <p>
                        Kuro Communications Limited (KCL) is a Consulting Company that strives to provide solutions 
                        that fit into organization’s requirements. When it comes to Capacity Building, Seminars, Project Management, Public Relations, 
                        Events Management and Creative Branding, KCL is your best bet.
                        </p>
                    </div>
                    <div className="inner_feature_content">
                        <div className="feature_one feature_container">
                            <div className="topic_holder">
                                <div className="image_container">
                                    <img src={MonitoringIcon} alt="Planning Icon"/>
                                </div>
                                <h2>
                                    MONITORING &#38; <br/> EVALUATION SYSTEMS
                                </h2>
                            </div>
                            <p>
                                We develop and provide systems that help projects and organizations assess and manage performances so the right improvements can be made, thereby getting them on a more profitable path.
                                <br/><br/>
                                 With KCL’s Monitoring and Evaluation system, you are sure of a greater understanding of where your organization is and where it’s headed.
                            </p>
                            <button className="features_button">Read More</button>
                        </div>
                        <div className="feature_two feature_container">
                            <div className="topic_holder">
                                <div className="image_container">
                                    <img src={ManagementIcon} alt="Planning Icon"/>
                                </div>
                                <h2>
                                    PROJECT <br/> MANAGEMENT
                                </h2>
                            </div>
                            <p>
                            We employ a methodical approach to planning and guiding project processes 
                            from start to finish to achieving its set of goals.
                            <br/><br/>
                            Our methodical processes are guided through five stages: initiation, 
                            planning and design, executing, Monitoring and controlling (maintaining 
                            progress of the activities that comprise the project), and closing. 
                            </p>
                            <button className="features_button">Read More</button>
                        </div>
                        <div className="feature_three feature_container">
                            <div className="topic_holder">
                                <div className="image_container">
                                    <img src={PlanningIcon} alt="Planning Icon"/>
                                </div>
                                <h2>
                                    CONCEPT <br/> DEVELOPMENT &#38; 
                                    <br/> STRATEGIC PLANNING
                                </h2>
                            </div>
                            <p>
                            We implore a blend of creativity and analytics to provide options 
                            and solutions that fits into, meets, and exceeds your plans and expectations.
                            <br/><br/>
                            Using our unique methods, we evaluate ideas, concepts, and 
                            strategic business requirements to design an appropriate approach for our clients, 
                            so as to develop precise and specific solutions and project plan for issues resolution.
                            </p>
                            <button className="features_button">Read More</button>
                        </div>
                        <div className="feature_four feature_container">
                            <div className="topic_holder">
                                <div className="image_container">
                                    <img src={SupportIcon} alt="Planning Icon"/>
                                </div>
                                <h2>
                                PROFESSIONAL <br/> COMMUNICATIONS <br/> &#38; BRAND SUPPORT
                                </h2>
                            </div>
                            <p>
                            We offer strategic brand marketing communication services and brand activations designed to support organizations in creating an edge in their business path. We help organizations to understand their audience and position in the marketplace, so they can optimise their existing marketing strategies.
                            <br/><br/>
                            We effectively helps our clients to more accurately pinpoint the techniques best-suited to their organizations to relate, get and retain their customers thereby delivering more cost-effective marketing.
                            </p>
                            <button className="features_button">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="inner_about">
                    <div className="about_top">
                        <h2>
                            About Us
                        </h2>
                        <div className="about_heading">
                            <div className="about_image_container">
                                <img src={AboutImage} alt=""/>
                            </div>
                            <div className="about_text_container">
                                <h1>
                                    Why should you choose us?
                                </h1>
                                <p>
                                We approach every client's business as if it were our own. We believe a consulting firm should be more than an advisor. We put ourselves in our clients' shoes while aligning our incentives with their objectives. 
                                We create and add value to our Clients with excellent solution delivery.
                                </p>
                                <p className="reasons_paragraph">
                                    Here are some of the reasons why you should work with us:
                                </p>
                                {/* <h3>
                                    Our Core Compentencies
                                </h3> */}
                                <ol>
                                    <li>We exercise flexibility in financial consideration for our clients.</li>
                                    <li>We provide prime solutions in line with client’s expectations.</li>
                                    <li>We possess an extensive range of experience, network and resources.</li>
                                    <li>We have a deep understanding and knowledge base of the Nigerian Business Environment.</li>
                                    {/* <li>We have a team of Young Nigerian professionals working intensively to deliver expert solutions for clients.</li>
                                    <li>We have a rich array of International Partners and network of resources that helps expand its offering and service delivery.</li> */}
                                </ol>
                                <button>
                                    More About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="partner_container">
                    <h2>Our Partners</h2>   
                    <blockquote><p>
                        Discover, define, develop and communicate with Kuro Communications
                    </p></blockquote>
                    <div>
                        <Carousel/>
                    </div>
                    <div className="button_container">
                        <button>
                            See All Clients
                        </button>
                    </div>
                </div>
            </div>
            {/* <div>

            </div> */}
            <div className="home_projects">
                <div className="home_projects_container">
                    <h2>
                        Completed Projects
                    </h2>
                    <div className="home_project_top_container">
                        <h1>Check out our recent projects</h1>
                        <div className="home_project_inner_container">
                            <p>View our portfolio of completed projects to see how partnering with us will 
                                ensure the realization of your original ideas. We deliver the best services.
                            </p>
                            <button>
                                View More
                            </button>
                        </div>
                        <div className="home_projects_gallery">
                            <div className="home_project_gallery_top">
                            </div>
                            <div className="home_project_gallery_bottom">
                                <div className="image_container">
                                    <img className="project_image" src={FRSCBodyCamProject} alt ="project" />
                                    <div className="main_container">
                                        <div className="date_container"><MdIcon.MdDateRange/>&nbsp; Dec 24th, 2021</div>
                                        <h4>FRSC Body Cam Project</h4>
                                        <p className="project_details">The Corps Marshal, Federal Road Safety Corps (FRSC) Boboye Oyeyemi, on Thursday, unveiled body cameras, 
                                            operation monitoring and control platform, to improve 
                                            the Corps’ field operations across the country.
                                        </p>
                                        <span><p>Read more</p></span>
                                    </div>
                                </div>
                                <div className="image_container">
                                    <img className="project_image" src={ProjectBottomImageOne} alt ="project" />
                                    <div className="main_container">
                                        <div className="date_container"><MdIcon.MdDateRange/>&nbsp; Nov 21th, 2021</div>
                                        <h4>MTN Project</h4>
                                        <p className="project_details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                                        </p>
                                        <span><p>Read more</p></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contactcomp/>
        </div>
    )
}

export default Home
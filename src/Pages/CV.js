import React, {Component} from 'react';

import "../CSS/CV.css";
import WorkExperience from "../Components/WorkExperience";
import Education from "../Components/Education";
import Hobbies from "../Components/Hobbies";
import ContactInfo from "../Components/ContactInfo";

class CV extends Component {
    render() {
        return (
            <div>
                <WorkExperience
                    works={[
                        {
                            title: "Software Engineer",
                            company: "Mayden",
                            date: "07/2019 - 07/2020",
                            description:
                                "Working as a Software Developer as part of my Industrial Year at University, " +
                                        "I worked on producing quality Healthcare Software as part of Improving Access to Psychological Therapy (IAPT). " +
                                    "This year was fundamental to me in discovering how to create production level code in PHP and React, " +
                                    "as well as working with legacy parts of the system."
                        },
                        {
                            title: "Football Referee",
                            company: "North East Hants Youth League",
                            date: "09/2014 - 09/2018",
                            description: "As a referee I had to take control of a large number of games that would often become difficult to manage, thus requiring me to maintain my grip on the game and demonstrate interpersonal, negotiation and persuasive skills."
                        }
                    ]}
                />
                <Education
                    educations={[
                        {
                            level: "Computer Science Bsc",
                            establishment: "University of Bath",
                            date: "10/2017 - 05/2021",
                            grades: "Entering my final year of a 4 year course with Industrial Placement"
                        },
                        {
                            level: "College",
                            establishment: "Alton College",
                            date: "09/2015 - 06/2017",
                            grades: "Graduating with 3 A's in Biology, Chemistry and Mathematics"
                        },
                        {
                            level: "Secondary School",
                            establishment: "Perins School",
                            date: "09/2010 - 05/2015",
                            grades: "Graduating with an A*, 7 A's and 2 B's"
                        }
                    ]}
                />
                <ContactInfo />
                <Hobbies />

                <a className={"icon-ref"} target="_blank" href="https://icons8.com/icons/set/planner">Planner icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <a className={"icon-ref"} target="_blank" href="https://icons8.com/icons/set/person-male">Person icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <a className={"icon-ref"} target="_blank" href="https://icons8.com/icons/set/phone">Phone icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <a className={"icon-ref"} target="_blank" href="https://icons8.com/icons/set/email">Email icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        );
    }
}

export default CV
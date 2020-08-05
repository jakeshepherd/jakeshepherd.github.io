import React, {Component} from 'react';

import "../CSS/CV.css";
import WorkExperience from "../Components/WorkExperience";

class CV extends Component {
    render() {
        return (
            <div>
                <h1>CV!</h1>
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
            </div>
        );
    }
}

export default CV
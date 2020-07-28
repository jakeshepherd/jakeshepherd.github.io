import React, {Component} from "react";

import Tamago from '../Images/Tamago.jpg';
import Route1 from '../Images/Route1.jpg';
import MoneyManager from '../Images/MoneyManager.jpg';
import PersonalDashboard from '../Images/PersonalDashboard.png';

import '../CSS/Projects.css';

import LargeProject from "../Components/LargeProject";
import SmallProject from "../Components/SmallProject";

class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <LargeProject
                    name={"Personal Dashboard"}
                    image={PersonalDashboard}
                />
                <span className="spacer" />
                <LargeProject
                    name={"Tamago"}
                    image={Tamago}
                    details={"Tamago is an app that keeps track of the food users have within the kitchen. It knows the expiry date of the food and notifies the user when it is about to go out of date." +
                    " Another feature of Tamago is providing a recipe to use based on the food soonest to expiry in the database.\n" +
                    "This was created using Java in the Android Studio IDE"}
                />
                <span className="spacer" />
                <LargeProject
                    name={"Route1"}
                    image={Route1}
                    details={"Route1 is an application we made as a group project at University.\n" +
                    " It's primary purpose is to analyse different paths you take from A to B over several different trips, and then produce your most efficient way to get from said A to B\n" +
                    "This app was created using Java in the Android Studio IDE"}
                />
                <span className="spacer" />
                <LargeProject
                    name={"Money Manager"}
                    image={MoneyManager}
                    details={"This is an app I developed that would easily allow you to store when you have upcoming bills, and send reminders to the user.\n" +
                    " You can add single time or recurring bills, as well as emailing whoever you may be splitting the bills with\n" +
                    "Again, the app was created using Java in the Android Studio IDE and was completed over 3 months of Summer"}
                />
                <span className="spacer" />
                <h3>More Projects...</h3>
                <SmallProject
                    name={"Chat System"}
                    details={"Using network sockets in Java, I created an application that allows users to chat over a network."}
                />
                <SmallProject
                    name={"WebGL Graphics"}
                    details={" I used Javascript to render a 3D cube which I could then manipulate using various functions."}
                />
            </div>
        );
    }
}

export default Projects;

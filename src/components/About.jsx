import { Link } from 'react-router-dom';
// import {Counter} from "./Lesson";
import React from "react";

const About = () => {
    return (
        <div>
            <h1>About ... go <Link to="/">home</Link></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, est.</p>
        </div>
    );
};

export default About;
import React from "react";
import {Lesson, Counter, Button} from "./Lesson";

// export class Footer extends React.Component<props> {

export class Posts extends React.Component {
        public render () {
                return (
                    <Lesson child={<Button />}> <Counter />  </Lesson>
                )
        }
}
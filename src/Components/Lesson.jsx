import React from "react";

function Welcome() {
    return <h1>Hello world</h1>
}

class SuperWelcome extends React.Component {
    render() {
        return <h1>Hello world 2</h1>
    }
}

function Lesson() {
    return (
        <div>
            <Welcome />
            <SuperWelcome />
        </div>
        )
}
export default Lesson;
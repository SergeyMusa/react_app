import React from "react";
// import { Link } from 'react-router-dom';
// import {Counter} from "./Lesson";
// import {Button, Counter} from "./Lesson";
// import styles from '.src/styles/Table.css';

export class Table extends React.Component {
    public render () {
        // https://www.cryptocompare.com/
        // _sir_ |
        // musa
        // API Key
        // be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e
        // fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e')

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(data => console.log(data));
        return (
            <div style={styles}>
                    <div className="box a">col 1</div>
                    <div className="box b">col 2</div>
                    <div className="box c">col 3</div>

                    <div className="row">
                        <div className="box d">short data</div>
                        <div className="box e">a really long piece of data</div>
                        <div className="box f">short data</div>
                    </div>

                    <div className="row">
                        <div className="box d">short data</div>
                        <div className="box e">a really long piece of data</div>
                        <div className="box f">short data</div>
                    </div>
            </div>
        )
    }
}

const styles = {
    color: 'red',
    // background: "blue",
}

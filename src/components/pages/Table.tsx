import React from "react";
// import styles from '.src/styles/Table.css';

interface tableProps {
    isLoaded: boolean;
    err: any;
    items: Array<any>;
}

export default class Table extends React.Component< tableProps > {
    constructor(props) {
        super(props);
        this.state = {
            err : '',
            isLoaded: false,
            items: [],
        };
    }
    componentDidMount() {
        // fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e')

        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                    isLoaded: true,
                        items: result.drinks
                    });
                },
                (err) => {
                    this.setState({
                        isLoaded:true,
                        err
                    });
                }
            )
    }

    public render () {
    // render () {
        const { err, isLoaded, items} = this.props;
        if (err) {
            return <p> Error {err.message} </p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.Data}
                            {/*<img src={item.strDrinkThumb} alt=""/>*/}
                        </li>
                    ))}
                </ul>
            )
        }

        // https://www.cryptocompare.com/
        // _sir_ |
        // musa
        // API Key
        // be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e
        // fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e')
        }
        // return (
        //             <div className="box a">col 1</div>
        // )
    // }
}

const styles = {
    color: 'red',
    background: "blue",
}

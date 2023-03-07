import React from "react";
// import styles from '.src/styles/Table.css';

// export default props => {
//     const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
//     const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
//     return (
//         <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
//             <button onClick={()=>props.onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
//             <button onClick={()=>props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>
//         </div>
//     )
// }

interface tableProps {
    isLoaded: boolean;
    err: any;v
    items: Array<any>;
}

export default class Table2 extends React.Component< tableProps > { //
            state = {
            err : '',
            isLoaded: false,
            items: [],
        };
    componentDidMount = () => {
        // fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e')

        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                    isLoaded: true,
                        items: result.Data
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
    handleClick = () => {
        this.setState({isLoader: false})
    }
    // public render () {
    render () {
        const { err, isLoaded, items} = this.props //this.state;
        if (err) {
            // return <p> Error {err.message} </p>
            return <p> Error {typeof (err)} {err}</p>
        } else if (isLoaded) { //!
            return <p> Loading... </p>
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>-Update-</button>
                    <ul>
                        {items.map(item => (
                            <li key={item.items}>
                                {item.CoinInfo} //
                                <img width={50} height={50} src={item.ImageUrl} alt=""/>
                            </li>
                        ))}
                    </ul>

                </div>
            // table {}
            // td {}

            )
        }
    };


    // https://www.cryptocompare.com/
        // _sir_ |
        // musa
        // API Key
        // be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e
        // fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e')

        // return (
        //             <div className="box a">col 1</div>
        // )
    // }
}
// const styles = {
//     color: 'red',
//     background: "blue",
// }

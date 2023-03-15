import React from 'react';
// import {render} from "react-dom";
// import  './Cards.css';

export class Tab extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // console.log('data',this.props);
        return (

            <div className="wrapper_tables">

                <table className="box">
                    <thead>
                    <tr className="nth-child(4)">
                        <th>Count</th>
                        <th>ID</th>
                        <th>DISPLAY</th>
                        <th>Name</th>
                        <th>RAW</th>
                    </tr>
                    </thead>
                    <tbody className="row">

                    {this.props.data?.map(item => (
                        <tr key={item.CoinInfo.Id}>
                            <td>{item.CoinInfo.Id}</td>
                            <td>{item.DISPLAY.USD.FROMSYMBOL}</td>
                            <td>{item.CoinInfo.Name}</td>
                            <td>{item.RAW.USD.PRICE}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        )
    }
}

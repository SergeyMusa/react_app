import React from 'react';
// import styles from './Table.css';

export default data => (
    <div className="wrapper">

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

        { data.data.map(item =>(
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


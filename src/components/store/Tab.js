
import React from 'react';

export default props => (
    <table className="table">
        <thead>
        <tr>
            <th>Count</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone</th>
        </tr>
        </thead>
        <tbody>

        {/*{ props.data.forEach(item) => (console.log('item', item)) }*/}
            { props.data.map(item =>(
                <tr key={item.data.Data.CoinInfo.Id}>
                    <td>{item.data.Data.CoinInfo}</td>
                    <td>{item.data.Data.Id}</td>
                    <td>{item.data.CoinInfo.Id}</td>
                    <td>{item.data.Data.Id}</td>
                    <td>{item.Url}</td>
                </tr>
            ))}

        </tbody>
    </table>
)


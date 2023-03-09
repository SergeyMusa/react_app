import {EmployersListItem} from "./EmployersListItem";
import React from "react";
import styles from './EmployersList.css';
// import Search from "../../store/Search";

export class EmployersList extends React.Component {

    constructor(props) {
        super(props);
    }
    elements = () => {
        return this.props.data.map(item => {
            const {id = item.CoinInfo.Id, ...itemProps} = item;
            // console.log('id',id);
            return (
                    <EmployersListItem key={id} {...itemProps} />
            )
        })
    }
  render () {
    return (
        <div className={"app-list"}>
            {/*<Search />*/}
            {this.elements()}
        </div>
    )
  }
}

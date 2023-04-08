import React from 'react';
import './assets/LoaderSpiner.css';

export class LoaderSpinner extends React.Component {
  render() {
    return <div className="lds-dual-ring"/>
  }
}

// draws by css
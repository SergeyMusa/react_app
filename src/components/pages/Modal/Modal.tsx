import React from "react";
import './Modal.scss';
import {Drawer} from "@mui/material";
import {bool} from "prop-types";

interface TimerDefaultProps {
    message: string;
    cartOpen;

}

export class Modal extends React.Component<any, any> {
    public static readonly defaultProps = {
        message: `Done!`,
        cartOpen: '',

    };

    constructor(props: any) {
        super(props);
        closeCart: Function.prototype;
    this.state = {
        order: false,
        // closeCart: Function.prototype,
    };
    }

        public render() {
        return (
            <div className={'modal'}>
                <h3>MODAL</h3>
                <Drawer
                    anchor={"right"}
                    open = {this.state.cartOpen}
                    onClose={this.state.closeCart}
                >


                </Drawer>
            </div>
        )
    }
}

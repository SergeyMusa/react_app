import React from "react"; // , {FunctionComponent}
import './Modal.css';
// import {Drawer} from "@mui/material";
// import {bool} from "prop-types";
import {action} from "mobx";

interface ModalProps {
    message?: string;
    // modalObj: {};// title, img, main-text
    modalTimer?: any;
    active: any;//string; //boolean; // состояние-видна ли компонента
    setActive: any; //FunctionComponent; // функция изменяет состояние видимости
}

export class Modals extends React.Component<ModalProps> {
        message: `Done!`;
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this) ;
    }
        // modalObj: any{};
        // modalTimer: null;

    doOnRun() {
        console.log('modalTimer', this.props.modalTimer)
        // if (this.props.modalTimer) {
        //     // clearInterval(modalTimer);
        // }
    }

    openModal = () => {
        console.log('openModal');
        console.log('active1', this.props.active);
        console.log('setActive', this.props.setActive);
        // this.doOnRun();
        this.setState({active: false});
        this.setState({setModalActive: false});

        console.log('state', this.state);
    }

    closeModal () {
        console.log('closeModal');
    }

        public render() {
        return (
            <div className={ action ? 'modal_active' : 'modal' } onClick={this.openModal}>
                <div className="modal__content" >
                    {/*  onClick={e => e.stopPropagation()} */}
                    <h2>{this.props.message}</h2>
                    {/*<p>{this.props.}</p>*/}
                    {/*<p><span>2 Lorem ipsum dolor sit amuam temporibus veritatis vero voluptas voluptatem. Veritatis, voluptatem.</span>*/}
                        <p>22 Beatae dolores ipsa natus odio possimus quo sunt tempore vel veniam, voluptatibus! Aliquid , enim error voluptate.</p>
                    {/*    <p>222 Aliquam aut cumque dicta eaque id nemo neque omnis quae soluta suscipit! harum quod veniam voluptatem!</p></p>*/}
                </div>
            </div>
        )
    }
}

{/* () => setActive(false) */}
{/*<h3>MODAL</h3>*/}
{/*<Drawer*/}
{/*    anchor={"right"}*/}
{/*    // open = {this.openModal}*/}
{/*    // onClose={this.closeModal}*/}
{/*>*/}
{/*    <p><span>1 Lorem ipsum dolor sit ampossimus ratione reprehenderit voluptate!</span></p>*/}
{/*</Drawer>*/}

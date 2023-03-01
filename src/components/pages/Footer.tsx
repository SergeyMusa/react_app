import React from "react";
// import debounce from "lodash/debounce";

// let footer = document.querySelector('[role="footer"]');
//
// const setClassFooter = () => {
//     footer.className += ' footer'; //.className += ' footer';
// }
// const x = debounce(setClassFooter, 200); // хз почему класс дублируется
// (function (){
//     x();
// }())
// const setFooter = () => {
//     footer.innerHTML = `<div >
//               <p> © 2023 Copyright MuSa </p>
//             </div>`
// }
// export default setFooter;


export class Footer extends React.Component {
    public render () {
        return (
            <div className={'footer'} >
               <p> © 2023 Copyright MuSa </p>
             </div>
        )
    }
}

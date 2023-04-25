import {observer} from "mobx-react";
import React from "react";
import {Inet404} from "_view/screen/404/components/Inet404";
import {Wanted404} from "_view/screen/404/components/Wanted404";
import {ButtonGroup, Container} from "@mui/material";
import Button from "@mui/material/Button";
import {Link, Route, Routes} from "react-router-dom";
import {STORE_TIMER} from "_store/StoreTimer";

@observer
export class Screen404 extends React.Component<any, any> {
  clickYes(path) {
    // this.props.history.push(path)
    console.log('clickYes')
  }

  // clickNo(path) {
  //   return <Inet404/>
  // }

  public render() {
    STORE_TIMER.stop();
    return (
      <>
        <h3>404</h3>
        <Container sx={{mt: '1rem'}} maxWidth={false}>
          {/*<h2 id={"headHave" }>Do you have Inet?</h2>*/}
          <h2 style={{display: Inet404 ? "block" : "none"}}>Do you have Inet?</h2>
          <div className="YesNo-Route">
            {/*<Link id="one" to="/Inet404">No</Link>*/}
            {/*<Link id="two" to="/Wanted404">Yes</Link>*/}
            <ButtonGroup
              disableElevation
              variant="text"
              aria-label="Disabled elevation buttons"
              size={"large"}
            >
              <Button component={Link} to="/Inet404" onClick={this.clickYes}>Yes</Button>
              <Button component={Link} to="/Wanted404">No</Button>
            </ButtonGroup>

            <br/>
          </div>
          <div className="YesNo-Route">
            <Routes>

              <Route path="/Inet404" element={<Inet404/>}/>
              <Route path="/Wanted404" element={<Wanted404/>}/>
            </Routes>
          </div>
        </Container>
        <br/>
        <Button component={Link} to="/Home" variant="contained" sx={{marginTop:2}}>go home</Button>
      </>
    );
  }
}
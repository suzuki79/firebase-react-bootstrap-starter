import * as React from "react";
import { withRouter } from "react-router";
import { Grid, Row, Col } from "react-bootstrap";


interface Props {

}

interface States {

}
class Home extends React.Component<Props, States> {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Grid>
                <Row >
                    <Col xs={12} md={9}>
                        <h1>Hello, World!</h1>
                    </Col>
                </Row>
            </Grid >
        )
    }
}

export default withRouter(Home);
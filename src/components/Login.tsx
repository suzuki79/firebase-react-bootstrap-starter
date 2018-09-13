import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { firebase } from "../firebase";
import { Button, ControlLabel, Form, Col, FormGroup, FormControl, ListGroupItem, ListGroup, Grid, Row } from "react-bootstrap";

interface Props extends RouteComponentProps<any> {

}
interface States {
    email: string,
    password: string
}

class Login extends React.Component<Props, States> {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }
    async handleSignUp(e) {
        try {
            this.props.history.push('/userentry');
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
    async handleLogin(e) {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            this.props.history.push('/');
        } catch (error) {
            alert(error);
        }
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePassChange(e) {
        this.setState({ password: e.target.value });
    }
    render() {
        const { email, password } = this.state;
        return (
            <Grid>
                <Row>
                    <Col xs={0} md={1}></Col>
                    <Col xs={12} md={10}>

                        <Form horizontal >
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                        </Col>
                                <Col sm={10}>
                                    <FormControl value={email} type="email" placeholder="Email" onChange={this.handleEmailChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                        </Col>
                                <Col sm={10}>
                                    <FormControl value={password} type="password" placeholder="Password" onChange={this.handlePassChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={10}>
                                    <Button onClick={this.handleLogin} bsStyle="primary" type="submit">ログイン</Button>
                                </Col>

                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={0} md={1}></Col>
                </Row>
            </Grid>
        );
    }
};
export default withRouter(Login);
import * as React from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { auth } from '../firebase';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./../assets/scss/App.scss";
interface LoginProps {

}
interface LoginState {
    authenticated: boolean
    loading: boolean
}

class Main extends React.Component<LoginProps, LoginState>  {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            authenticated: false
        };
        this.handleMenuSelected = this.handleMenuSelected.bind(this);
    }

    componentWillMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false
                });
            }
        });
    }

    renderWithRoot() {
        const { authenticated } = this.state;
        if (authenticated === true) {
            return <Home />
        } else {
            return <Redirect to="/login" />
        }
    }

    handleMenuSelected(e) {
        if (e === 6) {
            auth.signOut();
        }
    }


    render() {
        const { authenticated, loading } = this.state;
        if (loading) return <p>loading..</p>;

        return (
            <BrowserRouter>
                <div>
                    <Navbar collapseOnSelect fluid onSelect={this.handleMenuSelected}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                Admin Tool
                            </Navbar.Brand>
                            {authenticated ? <Navbar.Toggle /> : ""}
                        </Navbar.Header>
                        {authenticated ?
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <NavItem eventKey={1}>
                                        <Link to='/'>Dashboard</Link>
                                    </NavItem>
                                    <NavItem eventKey={6}>
                                        ログアウト
                                </NavItem>
                                </Nav>
                            </Navbar.Collapse> : ""}
                    </Navbar>
                    <Route
                        exact
                        path="/"
                        render={this.renderWithRoot.bind(this)}
                    />
                    <Route
                        exact
                        path="/login"
                        render={() =>
                            authenticated === false ? (
                                <Login />
                            ) : (
                                    <Redirect to="/" />
                                )
                        }
                    />
                </div>
            </BrowserRouter >
        );
    }
};


export default Main;
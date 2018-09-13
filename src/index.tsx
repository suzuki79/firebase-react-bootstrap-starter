import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Main from "./components/Main";

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <Main />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/Main", () => {
        const NewApp = require("./components/Main").default;

        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            rootEl
        );
    });
}

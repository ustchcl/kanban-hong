import React from "react";
import { IonApp, IonToast } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginPage from "./pages/login/Login";
import HomePage from "./pages/home/Home";
import { toastBS } from "./utils/GlobalConstants";
import { skip } from "rxjs/operators";

type State = {
  showToast: boolean;
  message: string;
  duration: number;
  closable: boolean;
};

export default class App extends React.Component<{}, State> {
  state = {
    showToast: false,
    message: "",
    duration: 0,
    closable: true,
  };

  componentDidMount() {
    toastBS
      .asObservable()
      .pipe(skip(1))
      .subscribe((params) => {
        this.setState({
          showToast: true,
          message: params.message,
          duration: params.duration,
          closable: params.closable,
        });
      });
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/page" component={HomePage} />
        </IonReactRouter>
        <IonToast
          isOpen={this.state.showToast}
          message={this.state.message}
          duration={this.state.duration}
          onDidDismiss={() => this.setState({ showToast: false })}
          buttons={
            this.state.closable
              ? [
                  {
                    text: "Done",
                    role: "cancel",
                    handler: () => {
                      console.log("Cancel clicked");
                    },
                  },
                ]
              : []
          }
        ></IonToast>
      </IonApp>
    );
  }
}

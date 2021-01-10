import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
} from "@ionic/react";
import BaseComponent from "../../components/base/BaseComponent";

type Props = {};

type State = {
  username: string;
  password: string;
  rememberMe: boolean;
};
export default class LoginPage extends BaseComponent<Props, State> {
  title = "Login";
  state = {
    username: "",
    password: "",
    rememberMe: false,
  };

  check(): boolean {
    return true;
  }

  async login() {}

  render() {
    return (
      <IonPage>
        <IonGrid>
          <IonRow>
            <IonLabel>Kanban - Hong</IonLabel>
          </IonRow>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">用户名</IonLabel>
              <IonInput
                value={this.state.username}
                onIonChange={(e) =>
                  this.setState({ username: e?.detail?.value ?? "" })
                }
              ></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">密码</IonLabel>
              <IonInput
                value={this.state.password}
                onIonChange={(e) =>
                  this.setState({ password: e?.detail?.value ?? "" })
                }
              ></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem style={{width: "100%"}}>
              <IonButton expand="block" onClick={this.login}>
                登陆
              </IonButton>
            </IonItem>
          </IonRow>
        </IonGrid>
      </IonPage>
    );
  }
}

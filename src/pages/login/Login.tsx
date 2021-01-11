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
  IonCheckbox,
} from "@ionic/react";
import BaseComponent from "../../components/base/BaseComponent";

type Props = {};

type State = {
  username: string;
  password: string;
};
export default class LoginPage extends BaseComponent<Props, State> {
  title = "Login";
  state = {
    username: "",
    password: "",
  };

  check(): boolean {
    return true;
  }

  async login() {}
  async register() {
    this.$message("You clicked register btn")
  }

  render() {
    return (
      <IonPage>
        <IonGrid style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{flex: 2}}/>
          <IonRow>
            <div style={{width: "100%", fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>Kanban - Hong</div>
          </IonRow>
          <div style={{flex: 2}}/>
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
                type="password"
                value={this.state.password}
                onIonChange={(e) =>
                  this.setState({ password: e?.detail?.value ?? "" })
                }
              ></IonInput>
            </IonItem>
          </IonRow>
          <div style={{flex: 1}}/>
          <IonRow>
              <IonButton style={{width: "100%"}} expand="block" onClick={this.login}>
                登录
              </IonButton>
          </IonRow>
          <div style={{height: 10}}/>
          <IonRow>
              <IonButton color="secondary" style={{width: "100%"}} expand="block" onClick={this.register.bind(this)}>
                注册
              </IonButton>
          </IonRow>
          <div style={{flex: 4}}/>
        </IonGrid>
      </IonPage>
    );
  }
}

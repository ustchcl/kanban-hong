import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonInput } from '@ionic/react'
import BaseComponent from '../../components/base/BaseComponent';

type Props = {

}

type State = {
  username: string;
  password: string;
  rememberMe: boolean;
}
export default class LoginPage extends BaseComponent<Props, State> {
  title = "Login"
  state = {
    username: '',
    password: '',
    rememberMe: false
  }

  async login() {
  
  }
  
  render() {
    return (
      <IonPage>
        <IonGrid>
          <IonRow>
            <span>Kanban - Hong</span>
          </IonRow>
          <IonRow>
            <IonInput value={this.state.username} placeholder="请输入用户名" onIonChange={e => this.setState({username: e?.detail?.value ?? ""})}></IonInput>
          </IonRow>
        </IonGrid>
      </IonPage>
    )
  }
}

import React from 'react'
import BaseComponent from '../../components/base/BaseComponent'
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react'
import Menu from '../../components/Menu'
import { Redirect, Route } from 'react-router-dom';
import Page from '../Page'
import Kanban from '../kanban/Kanban';

export default class Home extends BaseComponent<{}, {}> {

  render() {
    return (
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/kanban" component={Kanban} exact/>
            <Route path="/page/test/:name" component={Page} exact />
            <Redirect from="/" to="/page/Inbox" exact />
          </IonRouterOutlet>
        </IonSplitPane>
    )
  }
}

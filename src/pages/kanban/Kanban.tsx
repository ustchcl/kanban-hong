import React from 'react'
import BaseComponent from '../../components/base/BaseComponent'
import { IonPage, IonContent, IonReorderGroup, IonItem, IonReorder, IonLabel, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react'
import { range } from "ramda"
import { ReactSortable } from "react-sortablejs"
import { pizza } from 'ionicons/icons'
import "./kanban.css"
import KanbanColumn from './KanbanColumn'

type Props = {}

type ItemType = {
  id: number;
  name: string;
}

type State = {
  leftList: ItemType[];
  rightList: ItemType[];
}

export default class Kanban extends BaseComponent<Props, State> {
  state: State = {
    leftList: [],
    rightList: [],
  }

  componentWillMount() {
    const items: ItemType[] = range(0, 10).map(i => ({
      id: i,
      name: `Item ${i}`,
    }))
    this.setState({
      leftList: items.filter(x => x.id % 2 === 0),
      rightList: items.filter(x => x.id % 2 !== 0)
    })
  }

  render() {
    return (
      <IonPage>
        <IonGrid style={{width: '100%'}}>
          <IonRow style={{height: '100%'}}>
            <IonCol>
              <KanbanColumn list={this.state.leftList}/>
            </IonCol>
            <IonCol>
              <KanbanColumn list={this.state.rightList}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonPage>
    )
  }

}

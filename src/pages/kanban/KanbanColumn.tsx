import { IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { pizza } from 'ionicons/icons';
import React from 'react'
import { ReactSortable } from 'react-sortablejs';
import BaseComponent from '../../components/base/BaseComponent';

type Props = {
  list: ItemType[],
  onChange?: () => {}
}

type State = {
  items: ItemType[]
}
type ItemType = {
  id: number;
  name: string;
}

export default class KanbanColumn extends BaseComponent<Props, State> {
  state: State = {
    items: []
  }

  componentDidMount() {
    this.setState({items: this.props.list})
  }

  render() {
    return (
      <IonContent>
        <ReactSortable
          animation={150}
          ghostClass="blue-background"
          group={{ name: 'shared' }}
          list={this.state.items}
          setList={(newState) => this.setState({ items: newState })}
        >
          {this.state.items.map(item => (
            <IonItem key={item.id}>
              <IonLabel>{item.name}</IonLabel>
              <IonIcon icon={pizza} slot="end" />
            </IonItem>
          ))}
        </ReactSortable>
      </IonContent>
    )
  }
}
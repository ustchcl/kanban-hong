import React from 'react'
import BaseComponent from '../../components/base/BaseComponent';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonGrid, IonChip, IonLabel, IonThumbnail, IonRow, IonIcon, IonButton } from '@ionic/react';
import { Task } from '../../utils/types';
import "./kanban.css"
import { range } from 'ramda';
import { ellipsisHorizontalOutline } from 'ionicons/icons';

type Props = {
  task: Task;
}

type State = {}

const userIcon = "https://randomuser.me/api/portraits/women/79.jpg"

export default class TaskItem extends BaseComponent<Props, State> {
  getColor(index: number) {
    const colors = [
      "primary", "secondary", "tertiary", "success", "warning",
      "danger", "light", "medium", "dark"
    ]
    return colors[index % colors.length ]
  }

  render() {
    return (
      <IonCard className="task-item">
        <IonCardHeader>
          <IonCardSubtitle>
            <div style={{display: 'flex', alignItems: "center"}}>
              {
                this.props.task.tags.map((x, i) => (<IonChip key={i} color={this.getColor(i)}><IonLabel>{x.content}</IonLabel></IonChip>))
              }
              <div className="task-item__add-tag-btn">+</div>
              <div style={{flex: 1}}/>
              <IonButton color="light">
                <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline}></IonIcon>
              </IonButton>
            </div>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className="task-item__description">
          {this.props.task.description}
          <div style={{height: 20}}/>
          <IonGrid>
          <IonRow>
          {
            range(0, 3).map(_ => (
          <IonThumbnail style={{marginRight: 10}}>
            <img src={userIcon} className="task-item__user-icon"/>
          </IonThumbnail>
          ))}
          </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    )
  }
}

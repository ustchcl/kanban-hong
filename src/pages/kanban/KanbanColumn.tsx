import { IonContent, IonIcon, IonItem, IonLabel, IonButton } from '@ionic/react';
import { pizza, addCircleOutline } from 'ionicons/icons';
import React from 'react'
import { ReactSortable } from 'react-sortablejs';
import BaseComponent from '../../components/base/BaseComponent';
import TaskItem from './TaskItem';
import { Task, Tag } from '../../utils/types';

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

  forkedTask: Task = {
    deadline: Date.now(),
    subTasks: [],
    tags: [{id: 1, content: "哈哈"}, {id: 2, content: "吼吼哦"}] as Tag[],
    users: [],
    category: "Finished",
    description: "我的就大卡司密码吗是睡觉啊就, ths skowq jsa, jdsakd, owor as the skk, thpe swo ruqiu hrhjs msa. sjadkwqo jsao, owqo, weqp qwe ewnnrt."
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
          {this.state.items.map((item, i) => (
            <TaskItem task={this.forkedTask} key={i}/>
          ))}
        </ReactSortable>
        <IonButton className="task-column__add-btn" expand="block">
          <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
          添加一个新任务
        </IonButton>
      </IonContent>
    )
  }
}

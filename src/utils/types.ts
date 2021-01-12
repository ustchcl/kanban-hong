export type Account = {
  id: number;
  icon: string;
  username: string;
}

export type Task = {
  deadline: number;
  subTasks: Task[];
  users: Account[];
  tags: Tag[];
  category: Category;
  description: string;
}

export type Tag = {
  id: number;
  content: string;
}

export type Category = 'Backlog' | 'Work in progress' | 'In Review' | 'Finished'
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  @Output() newTask = new EventEmitter<boolean>();

  tasks = [

    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '31-12-2025'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  showNewTask = false;

  get selectedUserTasks() {

    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  generateNewTask() {

    this.showNewTask = true;
    this.newTask.emit(this.showNewTask);
  }
  
}

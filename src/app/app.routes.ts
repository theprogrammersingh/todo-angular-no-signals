import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/todo/list/list.component').then(
        (module) => module.ListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./pages/todo/add-task/add-task.component').then(
        (module) => module.AddTaskComponent
      ),
  },
  {
    path: ':taskID',
    loadComponent: () => import('./pages/todo/view-task/view-task.component').then(
      (module)=> module.ViewTaskComponent
    )
  }
];

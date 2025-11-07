import type { ITodo } from "todo-entity";

export interface IObjective {
   getTitle(): string;
   editTitle(newTitle: string): void;
   getDescription(): string;
   editDescription(newDescription: string): void;
   isCompleted(): boolean;
   getSubObjectives(): IObjective[];
   addSubObjective(objective: IObjective): void;
   markAsCompleted(): void;
   markAsIncomplete(): void;
   addTask(task: ITodo): void;
   getTasks(): ITodo[];
   removeTask(task: ITodo): void;
   getId(): string;
}

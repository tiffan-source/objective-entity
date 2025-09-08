import type { ITodo } from "todo-entity";

export interface IObjective {
   getTitle(): string;
   getDescription(): string;
   isCompleted(): boolean;
   getSubObjectives(): IObjective[];
   addSubObjective(objective: IObjective): void;
   markAsCompleted(): void;
   addTask(task: ITodo): void;
   getTasks(): ITodo[];
   removeTask(task: ITodo): void;
   getId(): string;
}

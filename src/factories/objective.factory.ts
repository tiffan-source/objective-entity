import type { IObjective } from "../entities/objective.entity.js";

export interface IObjectiveFactory {
   createObjective(
      title: string
   ): IObjective

   createObjectiveWithId(
      id: string,
      title: string
   ): IObjective
};

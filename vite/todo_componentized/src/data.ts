import { v4 as uuid } from "uuid";
import { ToDos } from "./types";

export const data = [
  { id: uuid(), todo: "Make a list" },
  { id: uuid(), todo: "Check it twice" },
] satisfies ToDos;

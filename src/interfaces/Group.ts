import type TaskTerritory from "./Task";

export default interface Group{
    groupName: string;
    items: TaskTerritory[];
}
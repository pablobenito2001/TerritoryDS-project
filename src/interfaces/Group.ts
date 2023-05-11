import type TaskTerritory from "./TaskTerritory";

export default interface Group{
    groupName: string;
    items: TaskTerritory[];
}
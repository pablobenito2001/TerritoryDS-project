import type Territory from "./TaskInterface";
import type { Dayjs } from "dayjs";

export default interface TaskTerritory{
    captain: string;
    date: string;
    hour: string;
    territory: number[]; 
    creationDate: string;
    expirationDate: string;
    house: string;
}
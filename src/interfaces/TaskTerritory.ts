import type Territory from "./TaskInterface";
import type { Dayjs } from "dayjs";

export default interface TaskTerritory{
    name: string;
    captain: string;
    date: string;
    hour: string;
    territory: Territory; 
    creationDate: string;
    expirationDate: string;
    house: string;
}
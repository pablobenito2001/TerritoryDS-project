import type { Dayjs } from "dayjs";

export default interface Task{
    captain: string;
    date: string;
    hour: string;
    territory: number[]; 
    creationDate: string;
    expirationDate: string;
    house: string;
}
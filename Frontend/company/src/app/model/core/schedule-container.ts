import { Schedule } from "./schedule";
import { Schedulebyday } from "./schedulebyday";

export class ScheduleContainer {
    schedule: Schedule = new Schedule();
    schedulebydayList: Schedulebyday[] = [];
}

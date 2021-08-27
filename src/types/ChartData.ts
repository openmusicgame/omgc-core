import { ITimeline } from "./animatable/Timeline";
import { Dictionary } from "./base/typeutil";

export default interface ChartData {
    formatVersion: string;
    timeOffset: number;
    realNoteCount: number;

    mainTimeline: ITimeline;
    metadata?: Dictionary<any>;
}
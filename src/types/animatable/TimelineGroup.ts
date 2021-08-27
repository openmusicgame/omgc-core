import { TypedObject } from "../base/model";
import { TimeValue } from "../base/typeutil";
import { Animatable } from "./Animatable";
import { ITimeline } from "./Timeline";

export interface TimelineGroup extends ITimeline {
    children: ITimeline[];
}

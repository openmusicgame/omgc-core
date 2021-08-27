import { TypedObject } from "../base/model";
import { TimeValue } from "../base/typeutil";
import { Animatable } from "./Animatable";
import { TimelineGroup } from "./TimelineGroup";

export interface keyFrame<T> {
    keyTime: TimeValue;
    value: T;
}

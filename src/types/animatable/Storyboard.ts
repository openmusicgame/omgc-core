import { TypedObject } from "../base/model";
import { TimeValue } from "../base/typeutil";
import { Animatable } from "./Animatable";
import { keyFrame } from "./KeyFrame";
import { ITimeline, Timeline } from "./Timeline";
import { TimelineGroup } from "./TimelineGroup";

export interface IStoryboard extends TimelineGroup, TypedObject<"Storyboard"> {
    name: string;
    keyFrames: keyFrame<any>[];
}


export class Storyboard extends Timeline implements IStoryboard {
    readonly $type: "Storyboard" = "Storyboard";

    keyFrames: keyFrame<any>[] = [];
    children: ITimeline[] = [];

    constructor(public name: string, public beginTime: TimeValue) {
        super(name, beginTime);
    }


}
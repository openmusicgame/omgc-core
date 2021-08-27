import { TypedObject } from "../base/model";
import { TimeValue } from "../base/typeutil";
import { Animatable } from "./Animatable";
import { EasingFunction } from "./EasingFunction";

export interface ITimeline extends Animatable {
    name: string;
    /** -1表示时长未知，取决于子元素 */
    duration: -1 | TimeValue;
    /** 相对父级Timeline的速度比，0为暂停，负数为倒退 */
    speedRatio: 1 | number;
    ease?: EasingFunction;
}


export abstract class Timeline implements ITimeline {
    duration: TimeValue = -1;
    speedRatio = 1;
    ease?: EasingFunction | undefined;

    constructor(public name: string, public beginTime: TimeValue) {

    }

}
import { TypedObject } from "@/types/base/model";
import { Location, TimeValue } from "@/types/base/typeutil";
import { Animatable } from "../Animatable";
export interface Note<T extends string> extends Animatable, TypedObject<"Note"> {
    kind: T;
    beginTime: TimeValue;
    location: Location;
    /** 默认缩放系数 */
    scale?: 1 | number;
    isFake?: false | boolean;

    effect?: any;
}
import { TypedObject } from "../base/model";
import { TimeValue } from "../base/typeutil";
import { Animatable } from "./Animatable";

export interface Timeline extends Animatable, TypedObject<"Timeline"> {
    name: string;
    duration: TimeValue | "forever";
    speed: number;
}

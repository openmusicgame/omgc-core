import { TypedObject } from "@/types/base/model";
import { Location, TimeValue } from "@/types/base/typeutil";
import { Animatable } from "../Animatable";
export interface INote<T extends string> extends Animatable, TypedObject<"Note"> {
    kind: T;

    name: string;
    location: Location;
    /** 默认缩放系数 */
    scale?: 1 | number;
    speed?: 1 | number;
    isFake?: false | boolean;

    effect?: any;
}

export abstract class Note<T extends string> implements INote<T> {
    readonly $type: "Note" = "Note";
    abstract kind: T;
    scale = 1;
    speed = 1;
    isFake = false;
    effect?: any;
    
    constructor(public name: string, public location: Location, public beginTime: TimeValue){

    }

}
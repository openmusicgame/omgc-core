import { Location, TimeValue } from "@/types/base/typeutil";
import { INote, Note } from "./Note";

export interface HoldableNote {
    endTime: TimeValue;
    /** 
     * 相对与起始位置的偏移。
     */
    endOffset: Location;
    /** 总连击数，如果该长条会提供大于1的连击 */
    combo?: 1 | number;
}
export interface Hold extends INote<"hold">, HoldableNote {
    
}

export class HoldNote extends Note<"hold"> implements Hold {
    kind: "hold" = "hold";

    constructor(public name: string, public location: Location, public beginTime: TimeValue,
        public endTime: TimeValue, public endOffset: Location, public combo = 1) {
        super(name, location, beginTime);
    }
}
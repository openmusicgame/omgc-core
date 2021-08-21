import { Location, TimeValue } from "@/types/base/typeutil";
import { Note } from "./Note";

export interface HoldableNote {
    endTime: TimeValue;
    /** 
     * 相对与起始位置的偏移。
     */
    endOffset: Location;
    /** 总连击数，如果该长条会提供大于1的连击 */
    combo?: 1 | number;
}
export interface Hold extends Note<"hold">, HoldableNote {
    
}
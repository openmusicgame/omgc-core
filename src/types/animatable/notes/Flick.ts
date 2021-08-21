import { Direction4 } from "@/types/base/typeutil";
import { Note } from "./Note";
export interface Flick extends Note<"flick"> {
    /** 如果为定向滑键，存方向 */
    direction?: Direction4;
    
}
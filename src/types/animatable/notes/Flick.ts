import { Direction4, Location, TimeValue } from "@/types/base/typeutil";
import { INote, Note } from "./Note";
export interface Flick extends INote<"flick"> {
    /** 如果为定向滑键，存方向 */
    direction?: Direction4;
    
}

export class FlickNote extends Note<"flick"> implements Flick {
    kind: "flick" = "flick";

    constructor(public name: string, public location: Location, public beginTime: TimeValue, public direction?: Direction4){
        super(name, location, beginTime);
    }
}
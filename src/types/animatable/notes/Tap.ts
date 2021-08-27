import { Location, TimeValue } from "@/types/base/typeutil";
import { INote, Note } from "./Note";
export interface Tap extends INote<"tap"> {

}

export class TapNote extends Note<"tap"> implements Tap {
    kind: "tap" = "tap";

    constructor(public name: string, public location: Location, public beginTime: TimeValue){
        super(name, location, beginTime);
    }
}
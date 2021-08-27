import { Location, TimeValue } from "@/types/base/typeutil";
import { INote, Note } from "./Note";
export interface Wipe extends INote<"wipe"> {

}

export class WipeNote extends Note<"wipe"> implements Wipe {
    kind: "wipe" = "wipe";

    constructor(public name: string, public location: Location, public beginTime: TimeValue){
        super(name, location, beginTime);
    }
}
import { IUniqueModel } from "./base/model";
import { Dictionary, ExtensiveStringEnum, PredefinedDictionary } from "./base/typeutil";
import ChartData from "./ChartData";
import { ChartRelation } from "./ChartRelation";

import { v4 as uuid} from 'uuid';

export type ChartModes =
    "key"     |
    "slide"   |
    "piano"   |
    "taiko"   |
    "appear"  |
    "through" |
    "combined"|
    "other";

export interface PredefinedMetadata {
    "preserved.source": string;
    "preserved.creator": string;
    "keyCount": number;
    "mode": ChartModes;
}

export interface ChartBasic<T = number> extends IUniqueModel<T> {
    version: string;
    author?: string;
    description? :string;
    license? :string;
    cover? :string;
    repository? :string;
    keywords? :string[];
    level? :string;
    rank? :string;

    metadata: PredefinedDictionary<any, PredefinedMetadata>;
}

export default interface Chart<T = number> extends ChartBasic<T> {
    rel?: ChartRelation;
    data: ChartData;
}


export function chart(name: string, 
    options: Partial<ChartBasic> = {}, 
    data: ChartData,
    rel?: ChartRelation
): Chart { 
    let ret: Chart = {
        uid: uuid(),
        name,
        version: options.version || "0.1.0",
        metadata: options.metadata || {
            "preserved.creator": "omgc",
            mode: "key"
        },
        data,
        rel
    };
    ret = Object.assign(options, ret);
    return ret;
}
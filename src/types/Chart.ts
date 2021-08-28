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
    /** 标记谱面来源（游戏） */
    "preserved.source": string;
    /** 标记谱面制作工具 */
    "preserved.creator": string;
    "keyCount": number;
    /** 标记推荐玩法 */
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

export interface Chart<T = number> extends ChartBasic<T> {
    rel?: ChartRelation;
    data: ChartData;
}

export class OmgcChart implements Chart {
    version: string;
    rel?: ChartRelation | undefined;
    author?: string | undefined;
    description?: string | undefined;
    license?: string | undefined;
    cover?: string | undefined;
    repository?: string | undefined;
    keywords?: string[] | undefined;
    level?: string | undefined;
    rank?: string | undefined;
    metadata: PredefinedDictionary<any, PredefinedMetadata>;
    id?: number | undefined;
    uid: string;

    constructor(public name: string, public data: ChartData, metadata: PredefinedDictionary<any, PredefinedMetadata> = {}) {
        this.uid = uuid();
        this.version = "0.1.0";
        this.metadata = metadata;
        if (!this.metadata["preserved.creator"]) {
            this.metadata["preserved.creator"] = "omgc";
        }
    }

}
import { IUniqueModel } from "./base/model";
import { Dictionary, PredefinedDictionary } from "./base/typeutil";

export interface PredefinedArtists {
    "lyricist": string;
    "composer": string;
    "arranger": string;
    "vocal": string;
    "featuring": string;
}

export interface MusicInfo<T = number> extends IUniqueModel<T> {
    file?: string;
    cover?: string;
    bpms: Dictionary<number>;
    length: number;
    artists: PredefinedDictionary<any, PredefinedArtists>;
}
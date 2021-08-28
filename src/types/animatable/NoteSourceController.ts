import { TypedObject } from "../base/model";
import { Location, Point, TimeValue } from "@/types/base/typeutil";
import { Animatable } from "./Animatable";
import { keyFrame } from "./KeyFrame";
import { INote } from "./notes/Note";
import { ITimeline, Timeline } from "./Timeline";
import { EasingFunction } from "./EasingFunction";


export interface INoteSourceController extends ITimeline, TypedObject<"NoteSourceController"> {
    name: string;
    notes: INote<any>[];
    bpm: number;
    /** 是否启用有轨判定模式，启用后会影响某些参数 */
    keyMode?: false | boolean;
    /** 轨道数 */
    keyCount?: number;
    /** 使用栅格布局（星号尺寸）时，对于每一个位置维度的栅格数，
     * 对于有轨下落式来说，x轴默认栅格数为轨道数 */
    grids: Point;
    /** 发射位置，若不发射则为参考位置，一般是屏幕正中间 */
    location: Location;
    /** 
     * 是否开启音符发射（下落），若不开启，音符会固定在出现位置不动
     * 
     * 针对appear和through类型默认为false，其它默认为true */
    emit?: boolean;
    /** 发射方向，单位为度，以+x轴为起点逆时针方向转动的度数 */
    emitDirection?: 270 | number;
    
    /**
     * 音符隐藏范围，单位为发射方向所用的长度单位。
     * 
     * 值越大，音符初次显示位置离发射位置越远（上隐），若为0则发射后立刻显示，若为负数则音符将永不显示（隐藏）。
     */
    hiddenDistance?: 0 | number;

    /** 是否反转垂直于发射方向的轴的左右方向 */
    mirror?: false | boolean;
}

export class NoteSourceController extends Timeline implements INoteSourceController {
    notes: INote<any>[] = [];
    keyMode = false;
    keyCount = 0;
    grids: Point = [0, 0];
    emit = true;
    emitDirection = 270;
    hiddenDistance = 0;
    mirror = false;

    readonly $type: "NoteSourceController" = "NoteSourceController";

    constructor(public name: string, public beginTime: TimeValue, public location: Location, public bpm: number) {
        super(name, beginTime);
    }

}
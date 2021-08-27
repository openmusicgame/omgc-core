import { Direction4, Location, TimeValue } from "@/types/base/typeutil";
import { HoldableNote } from "./Hold";
import { INote } from "./Note";
export interface SlideNode<T extends INote<any>> extends Animatable {
    /** 
     * 相对上一个SlideNode或者Slide起始位置的偏移，可能会有多余一个的坐标轴发生偏移（例如Arcaea的蛇）
     */
    offset: Location;
    /** 如果为弧线，则提供控制点的位置，绘制2次贝塞尔曲线 */
    controlPoint?: Location;
    /** 节点是否含有note。如果该note不影响Slide节点的判定，可以不放在节点里面 */
    note?: T extends Slide ? never : T;
}

export interface Slide extends INote<"slide">, HoldableNote {
    nodes: SlideNode<INote<any>>[];
}
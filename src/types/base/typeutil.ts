import { Readable } from "readable-stream";

export interface Dictionary<T> {
    [key: string]: T;
}

export type PredefinedDictionary<T, D extends {}> = Dictionary<T> & Partial<D>;

export type ExtensiveStringEnum<E extends string> = E | string;

export type TimeValue = string | number;

// Location和Point的区别是Location包含单位，例如px, %, *, hsl等
export type Location2D = [string, string];
export type Location3D = [string, string, string];
export type Location4D = [string, string, string, string];
export type Location = Location2D | Location3D | Location4D; 

export type Margin = [string, string, string, string];

export type DirectionH2 = "left" | "right";
export type DirectionH3 = DirectionH2 | "center";
export type DirectionV2 = "top" | "bottom";
export type DirectionV3 = DirectionH2 | "middle";
export type DirectionS = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type Direction4 = DirectionH2 | DirectionV2;
export type Direction6 = DirectionH3 | DirectionV3;
export type Direction8 = Direction4 | DirectionS;

export type Point2D = [number, number];
export type Point3D = [number, number, number];
export type Point = Point2D | Point3D;

/** 在浏览器端和Node.js端保持Blob对象一致 */
export interface BlobLike {
    readonly size: number;
    readonly type: string;
    arrayBuffer(): Promise<Uint8Array>;
    // slice(start?: number, end?: number, contentType?: string): BlobLike;
    stream(): Readable;
    text(): Promise<string>;
}
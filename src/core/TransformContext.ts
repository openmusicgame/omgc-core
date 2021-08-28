import { Dictionary } from "@/types/base/typeutil";

export interface TransformContext {
    params: Dictionary<any>;
    resources: Dictionary<any>;
}
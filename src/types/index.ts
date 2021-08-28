import { Dictionary } from "./base/typeutil";
import { Chart } from "./Chart";

export default interface ChartResource {

    apiVersion: "omgc/v1alpha";
    kind: "Chart";
    metadata: { name: string } & Dictionary<string>;
    spec: Chart<any>;
}
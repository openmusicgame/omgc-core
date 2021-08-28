import { BlobLike, Dictionary } from "@/types/base/typeutil";
import { Chart } from "@/types/Chart";
import { TransformContext } from "./TransformContext";

export interface ChartExporterConstructor<T extends string> {
    readonly type: T;
    new(): ChartExporter<T>;

    pluginName: string;
    version: string;
    description?: string;
    supportMimes: Array<{
        mimeType: string;
        extension: string;
        isBundleFile: boolean;
    }>;
}

export interface ChartExporter<T extends string> {
    /**
     * Export plain-text chart file(e.g. JSON)
     * @param chartContent file content
     */
    exportChart(chart: Chart, context: TransformContext): Promise<string>;
    /**
     * Export chart bundle file includes music, illustration, etc.(e.g. Molody .mcz)
     * @param bundleFile a blob-like object(bytes + MIME type)
     */
    exportChartBundle(chart: Chart, context: TransformContext): Promise<BlobLike>;
}
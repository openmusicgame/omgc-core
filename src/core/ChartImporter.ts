import { BlobLike, Constructor, Dictionary } from "@/types/base/typeutil";
import { Chart } from "@/types/Chart";
import { TransformContext } from "./TransformContext";

export interface ChartImporterConstructor<T extends string> {
    readonly type: T;
    new(): ChartImporter<T>;

    pluginName: string;
    version: string;
    description?: string;
    supportMimes: Array<{
        mimeType: string;
        extension: string;
        isBundleFile: boolean;
    }>;
    importParams: {
        [name: string]: {
            type: Constructor<any>;
            required?: boolean;
        };
    }
}

export interface ChartImporter<T extends string> {
    /**
     * Import plain-text chart file(e.g. JSON)
     * @param chartContent file content
     */
    importChart(chartContent: string, context: TransformContext): Promise<Chart>;
    /**
     * Import chart bundle file includes music, illustration, etc.(e.g. Molody .mcz)
     * @param bundleFile a blob-like object(bytes + MIME type)
     */
    importChartBundle(bundleFile: BlobLike, context: TransformContext): Promise<Chart>;
}
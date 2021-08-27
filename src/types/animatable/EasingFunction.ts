
export type EasingMode = "ease-in" | "ease-out" | "ease-in-out";
export type EasingFunctionName = 
"liner" |
"sine" |
"quadratic" | "cubic" | "quartic" | "quintic" |
"exponential" |
"circle" |
"back" |
"elastic" |
"bounce";


export interface EasingFunction {
    mode: EasingMode;
    name: EasingFunctionName;
}

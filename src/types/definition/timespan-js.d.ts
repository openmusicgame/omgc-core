declare module "timespan-js" {
    type TimeUnit = "y"|"years"|
        "M"|"months"|
        "d"|"days"|
        "h"|"hours"|
        "m"|"minutes"|
        "s"|"seconds"|
        "ms"|"milliseconds";

    class TimeSpan {
        /**
         *构造函数
         * @param value 必须，number类型。时间差值
         * @param unit 可选，指定value的单位。默认：ms
         * @param config 可选，配置参数。
         */
        constructor(value: number, unit?: TimeUnit, config?: any);

        /**
         * 通过javascript Date对象获取Timespan实例
         * @param startDate 起始日期，必须
         * @param endDate 结束日期，可选。默认:now
         */
        static fromDates(startDate: Date, endDate?: Date): TimeSpan;
        /**
         * 设置当前语言（如果value为空），添加语言（如果value不为空）
         * @param key 语言键
         * @param value 语言对象
         */
        static lang(key: string, value: any): string;
        static noConflict(): TimeSpan;
        static version: string;

        milliseconds(): number;
        seconds(): number;
        minutes(): number;
        hours(): number;
        days(): number;
        weeks(): number;
        months(): number;
        years(): number;

        asMilliseconds(): number;
        asSeconds(): number;
        asMinutes(): number;
        asHours(): number;
        asDays(): number;
        asWeeks(): number;
        asMonths(): number;
        asYears(): number;

        humanize(unit?: TimeUnit, length?: number);

        add(value: TimeSpan, unit?: TimeUnit);
        subtract(value: TimeSpan, unit?: TimeUnit);

        get(): number;
        set(value: TimeSpan, unit?: TimeUnit): void;

        lang(key: string): TimeSpan;
    }

    export = TimeSpan;
}
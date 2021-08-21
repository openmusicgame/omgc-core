import TimeSpan from "timespan-js";

/**
 * 计算某一天是该年的第几周
 * @param src 
 * @author element-ui
 */
 function getWeekNumber(src: Date) {
    const date = new Date(src.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
    // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

/** 
 * 
 * 日期格式化
 * @author meizz 
 */
function DateFormatter(d: Date, format = "yyyy-MM-dd HH:mm:ss") {
    const o = {
        "M+": d.getMonth() + 1, // 月份 
        "d+": d.getDate(), // 日 
        "H+": d.getHours(), // 小时 
        "h+": d.getHours() != 12 ? (d.getHours() % 12) : 12, // 小时 
        "m+": d.getMinutes(), // 分 
        "s+": d.getSeconds(), // 秒 
        "q+": Math.floor((d.getMonth() + 3) / 3), // 季度 
        "S": d.getMilliseconds(), // 毫秒 

        "f": d.getMonth() + 1 > 6 ? "下" : "上", // 半年
        "W": getWeekNumber(d) // 周
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let k: keyof typeof o;
    for (k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1)
                ? o[k].toString()
                : ("00" + o[k]).substr(o[k].toString().length)
            );
        }
    }
    return format;
}

export function formatDate(value: unknown, format = "yyyy-MM-dd HH:mm:ss", success = { status: true }): string {
    if (value === null || value === undefined || value === "") {
      return "";
    } else if (value instanceof Date) {
      return DateFormatter(value, format)!;
    } else if (typeof value === "string") {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return DateFormatter(date, format)!;
      }
    }
    success.status = false;
    return value as any;
}

export function relativeTime(timeStr: string) {
    const today = formatDate(new Date(), "yyyy-MM-dd");
    return TimeSpan.fromDates(new Date(today + " " + timeStr), new Date(today)).milliseconds();
}
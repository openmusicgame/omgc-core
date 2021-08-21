export interface IUniqueModel<T> {
    /** 名称 */
    name: string;
    /** 数据库主键 */
    id?: T;
    /** 唯一标识符，例如UUID */
    uid: string;
}

export interface TypedObject<T extends string> {
    $type: T;
}
declare module 'ember' {
    namespace Ember {
        function get(obj: any, key: string): any;
        function set(obj: any, key: string, value: any): any;
        function getProperties<K extends string>(obj: any, keys: K[]): Pick<any, K>;
        function getProperties<K extends string>(obj: any, ...keys: K[]): Pick<any, K>;
        function setProperties<K extends string>(obj: any, hash: Pick<any, K>): Pick<any, K>;

        interface CoreObject {
            get(key: string): any;
            set(key: string, value: any): any;
            getProperties<K extends string>(keys: K[]): Pick<any, K>;
            getProperties<K extends string>(...keys: K[]): Pick<any, K>;
            setProperties<K extends string>(hash: Pick<any, K>): Pick<any, K>;
        }

        interface Enumerable<T> {
            getEach(key: string): any[];
            setEach(key: string, value: any): any;
            mapBy(key: string): any[];
            filterBy(key: string, value?: any): T[];
            rejectBy(key: string, value?: any): T[];
            findBy(key: string, value: any): T | undefined;
            isEvery(key: string, value?: boolean): boolean;
            isAny(key: string, value?: boolean): boolean;
            sortBy(...property: string[]): T[];
        }
    }
}

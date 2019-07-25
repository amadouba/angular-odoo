export abstract class FetchData {
    
    // logs: string[];
    // logInfo: (msg: string) => void;

    call :(model: string, method: string, args: any, kwargs: any) => Promise<any>;

    searchRead: (model: string, domain: any, fields: any, limit: number, offset: number, context?: any ) => Promise<any>;

}
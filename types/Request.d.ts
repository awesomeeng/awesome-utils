declare const _exports: RequestUtils;
export = _exports;
declare class RequestUtils {
    request(method: any, url: any, contentType?: any, content?: any, headers?: {}, options?: {}, ...args: any[]): any;
    get(url: any, headers?: {}, options?: {}): any;
    post(url: any, contentType: any, content: any, headers?: {}, options?: {}): any;
    put(url: any, contentType: any, content: any, headers?: {}, options?: {}): any;
    delete(url: any, headers?: {}, options?: {}): any;
    head(url: any, headers?: {}, options?: {}): any;
    connect(url: any, contentType: any, content: any, headers?: {}, options?: {}): any;
    options(url: any, contentType: any, content: any, headers?: {}, options?: {}): any;
    trace(url: any, headers?: {}, options?: {}): any;
    patch(url: any, contentType: any, content: any, headers?: {}, options?: {}): any;
    parseContentType(headers: any): any;
    parseContentEncoding(headers: any): string;
    addContentTypeAndEncoding(headers?: {}, contentType?: string, contentEncoding?: string): void;
}
//# sourceMappingURL=Request.d.ts.map
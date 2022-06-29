import { CRUD } from "../../common/interfaces/crud.interface";
import { INews } from "../models/news.model";
declare class NewsService implements CRUD {
    private static instance;
    static getInstance(): NewsService;
    create(resource: INews, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<void>;
    list(resource: any, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<any>;
    singleNews(resource: any, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<any>;
    search(resource: any, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<any>;
}
declare const _default: NewsService;
export default _default;

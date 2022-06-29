export interface NewsDto {
    id: string;
    country: string;
    language: string;
    category: string;
    subCategory?: string;
    source?: string;
    title: string;
    summary: string;
    image: string;
    url: string;
    published?: string;
}
import mongoose, { Document, Schema } from 'mongoose';
export interface INews {
    country: string;
    language: string;
    category: string;
    subCategory?: string;
    source?: string;
    title: string;
    summary: string;
    image: string;
    url: string;
    published?: string;
}
export interface NewsModel extends INews, Document {
}
export declare const NewsSchema: Schema;
declare const _default: mongoose.Model<NewsModel, {}, {}, {}, any>;
export default _default;

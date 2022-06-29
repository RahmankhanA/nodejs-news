export interface UsersDto {
    id: string;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    country: string;
}
import mongoose, { Document } from 'mongoose';
export interface IUser {
    username?: string;
    email?: string;
    password?: string;
    profileId?: string;
    country: string;
}
export interface UserModel extends IUser, Document {
}
declare const _default: mongoose.Model<UserModel, {}, {}, {}, any>;
export default _default;

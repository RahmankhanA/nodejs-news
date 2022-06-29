import { UsersDto } from "../models/users.model";
declare class UsersDao {
    private static instance;
    users: Array<UsersDto>;
    constructor();
    static getInstance(): UsersDao;
    addUser(user: UsersDto): Promise<string>;
    getUsers(): Promise<UsersDto[]>;
    getUserById(userId: string): Promise<UsersDto | undefined>;
    putUserById(user: UsersDto): Promise<string>;
    patchUserById(user: UsersDto): Promise<string>;
    removeUserById(userId: string): Promise<string>;
}
declare const _default: UsersDao;
export default _default;

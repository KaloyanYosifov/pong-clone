export interface UserModel {
    id: string | number;
    name: string;
    password: string;
    token?: string;
}

export class User {
    constructor(protected attributes: UserModel) {}

    getAttributes() {
        return { ...this.attributes };
    }

    static getTableName() {
        return 'users';
    }
}

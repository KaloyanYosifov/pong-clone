/**
 * External dependencies.
 */
import { v4 as uuid } from 'uuid';
/**
 * Internal dependencies.
 */
import { db } from '@/db';
import { webtoken } from '@/webtoken';
import { tap } from '@/db/utils/helpers';
import { User, UserModel } from '@/features/user/models/User';

export interface UserInput {
    name: string;
    password: string;
}

export class UserRepository {
    protected static instance: UserRepository | null = null;

    private constructor() {}

    all(): User[] {
        return db.get(User.getTableName())
            .value()
            .map((data: UserModel) => {
                return new User({
                    id: data.id,
                    name: data.name,
                    password: data.password,
                });
            });
    }

    findById(id: string | number): User | null {
        const data = db.get(User.getTableName())
            .find({ id })
            .value();

        return data ? new User(data) : null;
    }

    find(input: UserInput) {
        const data = db.get(User.getTableName())
            .find(input)
            .value();

        return data ? new User(data) : null;
    }

    create(input: UserInput) {
        const id = uuid();
        const token = webtoken.sign({ id });
        const combinedInput = { id, token, ...input };

        return tap<User>(new User(combinedInput), (user) => {
            db.get(User.getTableName())
                .push(user.getAttributes())
                .write();
        });
    }

    static getInstance() {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }

        return UserRepository.instance;
    }
}

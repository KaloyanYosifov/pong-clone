/**
 * External dependencies.
 */
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies.
 */
import { db } from '@/db';
import { User, UserModel } from '@/features/user/models/User';
import { tap } from '@/db/utils/helpers';

export interface CreateUserInput {
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

    create(input: CreateUserInput) {
        return tap<User>(new User({ id: uuid(), ...input }), () => {
            db.get(User.getTableName())
                .push(input)
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

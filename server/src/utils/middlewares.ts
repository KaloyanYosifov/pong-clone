/**
 * Internal dependencies.
 */
import { Context } from '@/server';

export const authenticated = (next: (root: any, args: any, context: Context, info: any) => any) => (root: any, args: any, context: Context, info: any) => {
    if (!context.user) {
        throw new Error('You are not authenticated!');
    }

    return next(root, args, context, info);
};

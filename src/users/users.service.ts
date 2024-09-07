import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: 'John', email: 'john@gmail.com' },
        { id: 2, name: 'Jane', email: 'jane@gmail.com' },
        { id: 3, name: 'Bob', email: 'bob@gmail.com' },
    ];

    getUsers() {
        return this.users;
    }
}

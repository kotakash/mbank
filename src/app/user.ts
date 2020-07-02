export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public uid: string,
        public email: string,
        public address: string,
        public city: string,
        public state: string,
        public zipcode: string,
        public password: string
    ) {}
}

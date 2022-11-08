export class UserService {
    static async getUser() {
        return {
            isAuth: false,
            id: 0,
            accessToken: false
        };
    }

    static async selectCity(code) {
        return {
            status: 'ok'
        };
    }

}
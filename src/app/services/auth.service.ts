export class AuthService {
    loggedIn: boolean = false;
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
    IsAutethenticated(){
        return this.loggedIn;
    }
}
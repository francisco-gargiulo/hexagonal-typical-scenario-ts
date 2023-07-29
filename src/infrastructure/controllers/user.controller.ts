class UserController {
  private userApplicationService: UserApplicationService;

  constructor(userApplicationService: UserApplicationService) {
    this.userApplicationService = userApplicationService;
  }

  getUser(id: string): User {
    return this.userApplicationService.getUser(id);
  }

  createUser(id: string, username: string, password: string): void {
    const user = new User(id, username, password);
    this.userApplicationService.createUser(user);
  }
}

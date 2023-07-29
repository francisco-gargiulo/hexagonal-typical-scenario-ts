class UserApplicationService {
  private userPort: UserPort;

  constructor(userPort: UserPort) {
    this.userPort = userPort;
  }

  getUser(id: string): User {
    return this.userPort.getById(id);
  }

  createUser(user: User): void {
    this.userPort.add(user);
  }
}

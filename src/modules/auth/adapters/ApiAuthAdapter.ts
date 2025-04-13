import { User } from '../entities/User';

export class ApiAuthAdapter {
  static toEntity(data: any): User {
    return {
      id: data.results.id || '',
      email: data.results.email || '',
      token: data.results.token || '',
      roles: data.results.roles || [],
    };
  }
}

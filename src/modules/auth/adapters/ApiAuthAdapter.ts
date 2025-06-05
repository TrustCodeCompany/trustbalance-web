// src/adapters/ApiAuthAdapter.ts
import { User } from '../entities/User';

export class ApiAuthAdapter {
  static toEntity(data: any): User {
    const result = data.results || {};
    return {
      id: result.id || '',
      email: result.email || '',
      token: result.token || '',
      roles: result.roles || [],
    };
  }
}

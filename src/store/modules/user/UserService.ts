import { User } from '@/store/modules/user/user'

export interface RegistrationValues {
  username: string;
  email: string;
  password: string;
}

export class UserAlreadyExistsError extends Error {
  username = ''
}

export interface UserService {
  createUser(values: RegistrationValues): Promise<User>;
}

import { User } from '@/store/modules/user/user'

export interface RegistrationValues {
  username: string;
  email: string;
  password: string;
}

export interface UserService {
  createUser(values: RegistrationValues): Promise<User>
}

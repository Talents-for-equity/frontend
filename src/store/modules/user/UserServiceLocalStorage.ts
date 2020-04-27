import { RegistrationValues, UserAlreadyExistsError, UserService } from '@/store/modules/user/UserService'
import {
  BusinessType,
  ContractCondition,
  PaymentType,
  ProjectType,
  Skill,
  User,
  UserType
} from '@/store/modules/user/user'
import { v4 as uuidv4 } from 'uuid'
import PouchDB from 'pouchdb-browser'
import Database = PouchDB.Database

export interface PouchDBUser extends User {
  _id: string;
  _rev?: string;
  password: string;
}

export class UserServiceLocalStorage implements UserService {
  db: Database

  constructor () {
    this.db = new PouchDB('users')
  }

  async createUser (values: RegistrationValues): Promise<User> {
    const user: PouchDBUser = {
      _id: values.username,
      id: values.username,
      username: values.username,
      email: values.email,
      password: values.password,
      userType: UserType.Talent,
      firstName: '',
      lastName: '',
      description: '',
      phone: '',
      zip: '',
      rating: 0,
      vat: '',
      skills: [],
      projectTypes: [],
      paymentTypes: [],
      businessTypes: [],
      portfolio: [],
      contractConditions: []

    }
    try {
      await this.db.put(user)
    } catch (error) {
      if (error.status === 409) {
        throw new UserAlreadyExistsError(values.username)
      }
      throw error
    }
    return user
  }
}

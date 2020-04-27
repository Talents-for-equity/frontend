import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { v4 as uuidv4 } from 'uuid'
import {
  BusinessType,
  ContractCondition,
  PaymentType,
  ProjectType,
  Skill,
  User,
  UserType
} from '@/store/modules/user/user'
import { RegistrationValues, UserService } from '@/store/modules/user/UserService'
import { UserServiceLocalStorage } from '@/store/modules/user/UserServiceLocalStorage'

const profiles: { [email: string]: User } = {}
profiles['ruslan@subbota.example'] = {
  id: uuidv4(),
  username: 'ruslan.subbota',
  userType: UserType.Talent,
  firstName: 'Ruslan',
  lastName: 'Subbota',
  email: 'ruslan@designer.example',
  description: 'Lorem ipsum designer',
  phone: '1234',
  zip: '5679',
  rating: 4.5,
  vat: 'vat-123',
  skills: [Skill.UIDesign, Skill.UXDesign],
  projectTypes: [ProjectType.LongTerm],
  paymentTypes: [PaymentType.CreditCard],
  businessTypes: [BusinessType.BusinessAngel],
  portfolio: [
    {
      title: 'Project title 1',
      rating: 5,
      description: 'Lorem ipsum description'
    },
    {
      title: 'Project title 2',
      rating: 4,
      description: 'Lorem ipsum description'
    }
  ],
  contractConditions: [ContractCondition.SharePart]
}

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
export class UserModule extends VuexModule {
  public user: User = profiles['ruslan@subbota.example']
  userService: UserService = new UserServiceLocalStorage()

  public static cloneUser (user: User): User {
    return JSON.parse(JSON.stringify(user))
  }

  get isLoggedIn () {
    return this.user !== undefined
  }

  get activeUser () {
    return UserModule.cloneUser(this.user)
  }

  @Action({ commit: 'setUser' })
  public async getUser (email: string) {
    let user = profiles[email]
    if (!user) {
      user = profiles['ruslan@designer.example']
    }
    return user
  }

  @Mutation
  public setUser (user: User) {
    this.user = user
  }

  @Action({ commit: 'setUser' })
  public async saveUser (user: User) {
    profiles[user.email] = user
    // await this.userService.createUser(user)
    return user
  }

  @Action({ commit: 'setUser', rawError: true })
  public async createUser (values: RegistrationValues) {
    const result = await this.userService.createUser(values)
    return result
  }

  @Action({ commit: 'setUser' })
  public async logout () {
    return undefined
  }
}

export default getModule(UserModule)

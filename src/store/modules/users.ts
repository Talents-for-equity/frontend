import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import store from '@/store'

export enum Skills {
  WebDesign,
  UXDesign,
  UIDesign,
  WebDevelopment,
  InformationArchitecture,
  BackEnd,
  ContentMarketing,
  FacebookAds,
  PR,
  Consulting,
  Mentoring,
  Development
}

export enum UserType {
  Seeker,
  Talent
}

export enum ProjectType {
  Startups,
  Personal,
  LongTerm,
  Volunteer
}

export enum PaymentType {
  CreditCard,
  Shares,
  SWIFT,
  Free
}

export interface Project {
  title: string;
  rating: number;
  description: string;
}

export interface User {
  userType: UserType;
  name: string;
  email: string;
  description: string;
  rating: number;
  skills: Skills[];
  projectTypes: ProjectType[];
  paymentTypes: PaymentType[];
  portfolio: Project[];
}

const profiles: { [email: string]: User } = {}
profiles['ruslan@designer.example'] = {
  userType: UserType.Talent,
  name: 'Ruslan Subbota',
  email: 'ruslan@designer.example',
  description: 'Lorem ipsum designer',
  rating: 4.5,
  skills: [Skills.UIDesign, Skills.UXDesign],
  projectTypes: [ProjectType.LongTerm],
  paymentTypes: [PaymentType.CreditCard],
  portfolio: [{
    title: 'Project title 1',
    rating: 5,
    description: 'Lorem ipsum description'
  }]
}

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UserModule extends VuexModule {
  public user: User = profiles['ruslan@designer.example']

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
}

export default getModule(UserModule)

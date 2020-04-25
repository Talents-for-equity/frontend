import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import store from '@/store'

export enum Skill {
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

export const skillNames: { [id: number]: string } = {}
skillNames[Skill.WebDesign] = 'Web design'
skillNames[Skill.UXDesign] = 'UX Design'
skillNames[Skill.UIDesign] = 'UI Design'
skillNames[Skill.WebDevelopment] = 'Web Development'
skillNames[Skill.InformationArchitecture] = 'Information Architecture'
skillNames[Skill.BackEnd] = 'Backend'
skillNames[Skill.ContentMarketing] = 'Content marketing'
skillNames[Skill.FacebookAds] = 'Facebook Ads'
skillNames[Skill.PR] = 'PR'
skillNames[Skill.Consulting] = 'Consulting'
skillNames[Skill.Mentoring] = 'Mentoring'
skillNames[Skill.Development] = 'Development'

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

export const projectTypeNames: { [id: number]: string } = {}
projectTypeNames[ProjectType.Startups] = 'Startups'
projectTypeNames[ProjectType.Personal] = 'Personal'
projectTypeNames[ProjectType.LongTerm] = 'Long-term'
projectTypeNames[ProjectType.Volunteer] = 'Volunteer'

export enum PaymentType {
  CreditCard,
  Shares,
  SWIFT,
  Free
}

export const paymentTypeNames: { [id: number]: string } = {}
paymentTypeNames[PaymentType.CreditCard] = 'Credit card'
paymentTypeNames[PaymentType.Shares] = 'Shares'
paymentTypeNames[PaymentType.SWIFT] = 'Shares'
paymentTypeNames[PaymentType.Free] = 'Free'

export interface Project {
  title: string;
  rating: number;
  description: string;
}

export enum ContractCondition {
  PayPerProject,
}

export interface User {
  userType: UserType;
  name: string;
  email: string;
  description: string;
  rating: number;
  skills: Skill[];
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
  skills: [Skill.UIDesign, Skill.UXDesign],
  projectTypes: [ProjectType.LongTerm],
  paymentTypes: [PaymentType.CreditCard],
  portfolio: [{
    title: 'Project title 1',
    rating: 5,
    description: 'Lorem ipsum description'
  },
  {
    title: 'Project title 2',
    rating: 4,
    description: 'Lorem ipsum description'
  }
  ]
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

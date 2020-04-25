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
paymentTypeNames[PaymentType.SWIFT] = 'SWIFT'
paymentTypeNames[PaymentType.Free] = 'Free'

export interface Project {
  title: string;
  rating: number;
  description: string;
}

export enum ContractCondition {
  PayPerProject,
  MonthlyPayment,
  TraineeForGreenCard,
  PayLater,
  SharePart,
  Volunteer
}

export const contractConditionNames: { [id: number]: string } = {}
contractConditionNames[ContractCondition.PayPerProject] = 'Pay per project'
contractConditionNames[ContractCondition.MonthlyPayment] = 'Monthly payment'
contractConditionNames[ContractCondition.TraineeForGreenCard] = 'Trainee for green card'
contractConditionNames[ContractCondition.PayLater] = 'Pay later'
contractConditionNames[ContractCondition.SharePart] = 'Share part'
contractConditionNames[ContractCondition.Volunteer] = 'Volunteer'

export interface User {
  userType: UserType;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  rating: number;
  seekerType: string;
  skills: Skill[];
  projectTypes: ProjectType[];
  paymentTypes: PaymentType[];
  portfolio: Project[];
  contractConditions: ContractCondition[];
}

const profiles: { [email: string]: User } = {}
profiles['ruslan@designer.example'] = {
  userType: UserType.Talent,
  firstName: 'Ruslan',
  lastName: 'Subbota',
  email: 'ruslan@designer.example',
  description: 'Lorem ipsum designer',
  seekerType: '',
  rating: 4.5,
  skills: [Skill.UIDesign, Skill.UXDesign],
  projectTypes: [ProjectType.LongTerm],
  paymentTypes: [PaymentType.CreditCard],
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
  contractConditions: []
}

profiles['ruslan@business.example'] = {
  userType: UserType.Seeker,
  firstName: 'Ruslan',
  lastName: 'Subbota',
  email: 'ruslan@business.example',
  description: 'Lorem ipsum business',
  seekerType: 'Business Angel',
  rating: 4.5,
  skills: [Skill.UIDesign, Skill.UXDesign],
  projectTypes: [ProjectType.Startups],
  paymentTypes: [PaymentType.Shares],
  portfolio: [],
  contractConditions: [ContractCondition.SharePart]
}

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
export class UserModule extends VuexModule {
  public user: User = profiles['ruslan@business.example']

  public static cloneUser (user: User): User {
    return JSON.parse(JSON.stringify(user))
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
    return user
  }
}

export default getModule(UserModule)

import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import store from '@/store'

export enum Skills {
  WebDesign = 'Web Design',
  UXDesign = 'UX Design',
  UIDesign = 'UI Design',
  WebDevelopment = ' Web Development',
  InformationArchitecture = 'Information Architecture',
  BackEnd = 'Backend',
  ContentMarketing = 'Content marketing',
  FacebookAds = 'Facebook Ads',
  PR = 'PR',
  Consulting = 'Consulting',
  Mentoring = 'Mentoring',
  Development = 'Development'
}

export interface User {
  name: string;
  email: string;
  skills: Skills[];
}

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UserModule extends VuexModule {
  public user: User = { name: '', email: '', skills: [] }

  @Action({ commit: 'setUser' })
  public async getUser (name: string) {
    const userResult: User = {
      name: name, email: name, skills: []
    }
    return userResult
  }

  @Mutation
  public setUser (user: User) {
    this.user = user
  }
}

export default getModule(UserModule)

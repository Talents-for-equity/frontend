import {Action, Module, Mutation, VuexModule, getModule} from "vuex-module-decorators";
import store from "@/store";

export interface User {
  name: string;
  email: string;
}

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true
})
class UserModule extends VuexModule {

  public user: User = {name: '', email: ''};

  @Action({commit: 'setUser'})
  public async getUser(name: string) {
    const userResult: User = {
      name: name, email: name
    };
    return userResult;
  }

  @Mutation
  public setUser(user: User) {
    this.user = user;
  }
}

export default getModule(UserModule);


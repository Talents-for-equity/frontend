import faker from 'faker'
import { Talent } from '@/store/modules/search'
import { contractConditionNames, Skill, skillNames } from '@/store/modules/users'

export class FakeTalentGenerator {
  generate (amount: number) {
    const talents: Talent[] = []
    for (let index = 0; index < amount; index++) {
      talents.push(this.generateFakeTalent())
    }
    return talents
  }

  private generateFakeTalent () {
    const talent: Talent = {
      id: faker.random.uuid(),
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      rating: faker.random.number(5),
      description: faker.random.words(100),
      skills: this.generateRandonNumbersBasedOnNames(skillNames),
      contractingConditions: this.generateRandonNumbersBasedOnNames(contractConditionNames),
      expertiseLevel: faker.random.number(3)
    }
    return talent
  }

  private generateRandonNumbersBasedOnNames (names: { [p: number]: string }) {
    const numbers: number[] = []
    const totalNumber = Object.values(names).length
    const numberOfItems = faker.random.number(totalNumber)
    const numberObject: {[id: number]: boolean} = {}
    for (let index = 0; index < numberOfItems; index++) {
      numberObject[faker.random.number(totalNumber - 1)] = true
    }
    Object.keys(numberObject).forEach(key => numbers.push(parseInt(key)))
    return numbers
  }
}

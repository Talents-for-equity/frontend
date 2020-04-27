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

export enum BusinessType {
  BusinessAngel,
  Investor
}

export const businessTypeNames: { [id: number]: string } = {}
businessTypeNames[BusinessType.BusinessAngel] = 'Business Angel'
businessTypeNames[BusinessType.Investor] = 'Investor'

export interface SelectOption {
  key: number;
  name: string;
  selected: boolean;
}

function getOptionsFromArray (array: { [id: number]: string }) {
  const result: SelectOption[] = []
  for (const key in array) {
    result.push({
      key: parseInt(key),
      name: array[key],
      selected: false
    })
  }
  return result
}

export function getContractConditionSelectOptions (): SelectOption[] {
  return getOptionsFromArray(contractConditionNames)
}

export function getPaymentTypeSelectOptions (): SelectOption[] {
  return getOptionsFromArray(paymentTypeNames)
}

export function getProjectTypeSelectOptions (): SelectOption[] {
  return getOptionsFromArray(projectTypeNames)
}

export function getSkillSelectOptions (): SelectOption[] {
  return getOptionsFromArray(skillNames)
}

export function getBusinessTypeOptions (): SelectOption[] {
  return getOptionsFromArray(businessTypeNames)
}

export interface User {
  id: string;
  username: string;
  userType: UserType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  description: string;
  rating: number;
  skills: Skill[];
  vat: string;
  projectTypes: ProjectType[];
  paymentTypes: PaymentType[];
  portfolio: Project[];
  contractConditions: ContractCondition[];
  businessTypes: BusinessType[];
}

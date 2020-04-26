import { ContractCondition, ExpertiseLevel, Skill } from '@/store/modules/users'

export interface Talent {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  rating: number;
  description: string;
  skills: Skill[];
  contractingConditions: ContractCondition[];
  expertiseLevel: ExpertiseLevel
}

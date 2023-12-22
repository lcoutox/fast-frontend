import { File } from './file'
import { Role } from './role'

export enum UserProviderEnum {
  EMAIL = 'email',
}

export type User = {
  id: number
  email: string
  firstName?: string
  lastName?: string
  photo?: File
  provider?: UserProviderEnum
  socialId?: string
  role?: Role
}

import instance from "./instance";
import { Users } from './../models/user';

export const signin = (user: Users) => {
  const url = `/signin`;
  return instance.post(url, user)
}

export const signup = (user: Users) => {
  const url = `/signup`;
  return instance.post(url, user)
}
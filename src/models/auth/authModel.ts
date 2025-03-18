import { thunk, Thunk } from "easy-peasy";
import http from "../../web/utils/http";

export interface signInData {
  email: string;
  password: string;
}

export interface signUpData {
  email: string;
  firstName: string;
  lastName: string;
  gender: "Male" | "Female" | "Others";
  password: string;
}

// Redux hum use krr rhe hai prop drilling se bachne k lie or ek state ko globally pure application me use krne k lie

export interface IAuthModel {
  signInData: signInData;
  signUpData: signUpData;
  // Thunks
  signInThunk: Thunk<IAuthModel, signInData>;
  signUpThunk: Thunk<IAuthModel, signUpData>;
}

const AuthModel: IAuthModel = {
  signInData: {
    email: "",
    password: "",
  },

  signUpData: {
    email: '',
    firstName: '',
    lastName: '',
    gender: 'Female',
    password: '',
  },

  signInThunk: thunk(async (_action, data) => {
    const response = await http()
      .post("/user/login", data)
      .then((res) => {
        
        return res;
      })
      .catch((e) => {
        console.log(e);
      });
    return response;
  }),

  signUpThunk: thunk(async (_action, data) => {
    const response= await http()
     .post("/user/register",data)
     .then((res) => {
        console.log(res);
        return res;
     })
     .catch((e)=> {
        console.log(e);
     })
     return response;
  })
};

export default AuthModel;

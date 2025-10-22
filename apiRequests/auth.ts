import {
  LoginBodyType,
  LoginResType,
  LogoutResType,
  RegisterBodyType,
  RegisterResType,
} from "@/app/schema/auth.schema";
import http from "@/lib/http";

const authAction = {
  login: async (body: LoginBodyType) => {
    const response = await http.post<LoginResType>("/user/login", body);
    return response.data;
  },

  register: async (body: RegisterBodyType) => {
    const response = await http.post<RegisterResType>("/users", body);
    return response.data;
  },

  logout: async () => {
    const response = await http.delete<LogoutResType>("/session");
    return response.data;
  },

  getMe: async () => {
    const response = await http.get<LoginResType>("/user/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  },
};

export default authAction;

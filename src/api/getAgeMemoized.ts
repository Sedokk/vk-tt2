import { getData } from "./getData";
import { AgeResponse } from "./types";

export const getAgeMemoized = () => {
  const dic: Record<string, number> = {};

  return async (name: string) => {
    if (name in dic) {
      return dic[name];
    }

    const data: AgeResponse = await getData("https://api.agify.io", { name });

    dic[name] = data.age;
    return data.age;
  };
};

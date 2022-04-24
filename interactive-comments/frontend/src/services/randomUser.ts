import axios from "axios";

const randomUserUrl = "https://randomuser.me/api/";

interface getRandomUserResponse {
  results: Array<{
    name: {
      title: string;
      first: string;
      last: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export const getRandomUser = async (): Promise<getRandomUserResponse> => {
  const response = await axios.get<getRandomUserResponse>(randomUserUrl, {
    params: {
      inc: "name, picture",
    },
  });
  return response.data;
};

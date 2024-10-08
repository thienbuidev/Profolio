import axios from "axios";

export const getDatabase = async () => {
  const response = await axios.post(
    `https://api.notion.com/v1/databases/11447387e4488077bd61c943cb27c436/query`,
    {},
    {
      headers: {
        Authorization: `Bearer secret_8xCEPwJEJPantacHwz7U3XG3RAMhpfVrmRtAKk1xKYD`,
        "Notion-Version": "2022-06-28",
      },
    }
  );
  return response.data;
};

export const getPageDetail = async (pageId: string) => {
  const response = await axios.get(
    `https://api.notion.com/v1/blocks/${pageId}/children`,
    {
      headers: {
        Authorization: `Bearer secret_8xCEPwJEJPantacHwz7U3XG3RAMhpfVrmRtAKk1xKYD`,
        "Notion-Version": "2022-06-28",
        Origin: "http://localhost:5173",
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );
  return response.data;
};

import axios from "axios";

export const getAllArticles = async topic => {
  return await axios.get("https://nc-new-app.herokuapp.com/api/articles", {
    params: { topic }
  });
};

export const getArticleById = async article_id => {
  return await axios.get(
    `https://nc-new-app.herokuapp.com/api/articles/${article_id}`
  );
};

export const getAllTopics = async () => {
  return await axios.get("https://nc-new-app.herokuapp.com/api/topics");
};

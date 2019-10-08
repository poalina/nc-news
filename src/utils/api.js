import axios from "axios";

export const getAllArticles = async () => {
  return await axios.get("https://nc-new-app.herokuapp.com/api/articles");
};

export const getArticleById = async article_id => {
  return await axios.get(
    `https://nc-new-app.herokuapp.com/api/articles/${article_id}`
  );
};

export const getAllTopics = async () => {
  return await axios.get("https://nc-new-app.herokuapp.com/api/topics");
};

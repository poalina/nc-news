import axios from "axios";
const baseURL = "https://nc-new-app.herokuapp.com/api";

export const getAllArticles = async (
  topic,
  username,
  sort_by,
  comment_count
) => {
  return await axios.get(`${baseURL}/articles`, {
    params: { topic, author: username, sort_by: sort_by, comment_count }
  });
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  return data;
};

export const getAllTopics = async () => {
  return await axios.get(`${baseURL}/topics`);
};

export const getAllUsers = async username => {
  return await axios.get(`${baseURL}/users/${username}`);
};

export const getCommentsByArticleId = async article_id => {
  const { data } = await axios.get(
    `${baseURL}/articles/${article_id}/comments`
  );
  return data;
};
export const postCommentByArticleId = async (article_id, body) => {
  return await axios.post(`${baseURL}/articles/${article_id}/comments`, body);
};

export const patchVote = async (id, num, type) => {
  return await axios.patch(`${baseURL}/${type}/${id}`, {
    inc_votes: num
  });
};

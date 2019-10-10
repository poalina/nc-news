import axios from "axios";
const baseURL = "https://nc-new-app.herokuapp.com/api";

export const getAllArticles = async (topic, username, votes) => {
  return await axios.get(`${baseURL}/articles`, {
    params: { topic, author: username, votes }
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

export const patchArticleVote = async (article_id, num) => {
  return await axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: num
  });
};

export const patchCommentVote = async (comment_id, num) => {
  return await axios.patch(`${baseURL}/comments/${comment_id}`, {
    inc_votes: num
  });
};

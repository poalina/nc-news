import axios from "axios";

export const getAllArticles = async () => {
  return await axios.get("https://nc-new-app.herokuapp.com/api/articles");
};

import axios from "axios";

export const fetchQuestionData = async () => {
  const res = await axios.get("https://opentdb.com/api.php?amount=5");
  return res.data;
};

// export const fetchCategoryData = async () => {
//   const response = await axios.get("https://opentdb.com/api_category.php");
//   return response;
// };

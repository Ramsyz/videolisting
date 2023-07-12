import axios from "axios";

const baseURL = "https://online-course-admin.onrender.com/api";
const getAllVideoList = axios.get(baseURL + "/video-lists?populate=*");
const getVideoById = (id) =>
  axios.get(baseURL + "/video-lists/" + id + "?populate=*");

export default {
  getAllVideoList,
  getVideoById,
};

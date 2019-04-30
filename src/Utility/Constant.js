export const NEWS_API_KEY = "4dbc17e007ab436fb66416009dfb59a8";
export const NEWS_URL =
  "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=" +
  NEWS_API_KEY;
export const TOP_NEWS = "Top News";
export const INDIA_NEWS = "India News";
export const INDIA_BUSINESS = "Business";
export const INDIA_ENTERTAINMENT = "Entertainment";
export const INDIA_HEALTH = "Health";
export const INDIA_SCIENCE = "Science";
export const INDIA_SPORTS = "Sports";
export const INDIA_TECHNOLOGY = "Technology";
export const BASE_API =
  "https://newsapi.org/v2/top-headlines?country=in&category="; //=business&apiKey=API_KEY"
export const TOP_STORY = "Top stories";

// Porject needed constants
export const ICON_PNG = "-Icon.png";
export const ICONS_ROOT_PATH = "../../Resources/";

//Local Storage constants
export const SELETECTED_NEWS_CATEGORY = "selectedNewsCategoty"

// export const FORCASTING_API_KEY = "b714ec74bbab5650795063cb0fdf5fbe";

/**
 * Return API for selected catagory.
 * @param {*} categoryApi
 */
function CreateApi(categoryApi) {
  let api = BASE_API + categoryApi + "&apiKey=" + NEWS_API_KEY;
  return api;
}

export default CreateApi;

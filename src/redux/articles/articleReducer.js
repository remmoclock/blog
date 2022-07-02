const INITIAL_STATE = {
  articles: JSON.parse(localStorage.getItem("article")) || [] ,
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDARTICLE":
      const newArr = [...state.articles];
      newArr.unshift(action.payload);
      localStorage.setItem("article", JSON.stringify(newArr));
      return {
        ...state,
        articles: newArr,
      };
    case "LOADARTICLES": {
      return {
        ...state,
        articles: action.payload,
      };
    };
  }
  return state;
}

export default articleReducer;

export const getArticles = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADARTICLES",
        payload: data,
      });
    });
};

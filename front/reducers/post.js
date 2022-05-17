export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '풍뎅이',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2022/05/05/20/01/australian-shepherd-7176981_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/10/05/00/03/cat-5627808_1280.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'pung',
          },
          content: '농구하는 풍뎅이~',
        },
        {
          User: {
            nickname: 'jangsu',
          },
          content: '다이어트 장수!',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터콘텐트',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;

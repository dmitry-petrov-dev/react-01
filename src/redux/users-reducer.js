const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
};
/*  users: [
    {
      id: 1,
      photoUrl:
        "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
      followed: true,
      fullName: "Dmitry",
      status: "I am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl:
        "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
      followed: false,
      fullName: "Andrey",
      status: "I am a boss too",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl:
        "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
      followed: true,
      fullName: "Pavel",
      status: "I am a boss too too",
      location: { city: "Kiev", country: "Ukraine" },
    },
    {
      id: 4,
      photoUrl:
        "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
      followed: false,
      fullName: "Sergey",
      status: "I am a boss, yeap",
      location: { city: "SPb", country: "Russia" },
    },
  ],
}; */
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.userId ? { ...user, followed: true } : user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.userId
            ? { ...user, followed: false }
            : user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users, totalCount) => ({
  type: SET_USERS,
  users,
  totalCount,
});
export const setTotalCountActionCreator = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setCurrentPageActionCreator = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export default usersReducer;

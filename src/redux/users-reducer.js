const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = { users: [] };
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;

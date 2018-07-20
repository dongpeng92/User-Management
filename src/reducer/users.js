import { GET_USERS, DELETE_USERS, CREATE_USER, FETCH_USER } from '../action/users';

const initialUserData = [];

function userReducer(state=initialUserData, action) {
  console.log(action);
  switch (action.type) {
      case DELETE_USERS:
          var new_state = state.filter((item, index) => {
              return item.username !== action.data
          });
          return new_state;
          break;
      case CREATE_USER:
          console.log([...state, action.user]);
          return [...state, action.user];
          break;
      case GET_USERS:
          console.log([...action.users]);
          return [...action.users];
          break;
  }
}

export default userReducer;
import { GET_USERS } from '../actions';

export default (users = [ {email: 'christinegierer@gmail.com', password: 'asdsff'}], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return users;
  }
};

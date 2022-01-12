import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";
import axios from "axios";

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  }, [dispatch]);

  const props = {
    users,
    getUsers,
  };

  return <UserList {...props} />;
};

export default UserListContainer;

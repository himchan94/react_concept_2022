import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersPromise } from "../redux/actions";

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get("https://api.github.com/users");
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersPromise());
  }, [dispatch]);

  const props = {
    users,
    getUsers,
  };

  return <UserList {...props} />;
};

export default UserListContainer;

import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/protectedRoute/UserRoute";

const userIndex = () => {
  const { state } = useContext(Context);
  const { user } = state;

  return (
    <UserRoute>
      <div className="gap">
        <h1>Hey {user?.name}</h1>
      </div>
    </UserRoute>
  );
};

export default userIndex;

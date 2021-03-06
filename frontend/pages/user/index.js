import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/protectedRoute/UserRoute";
import UserNav from "../../components/nav/UserNav";

const userIndex = () => {
  const { state } = useContext(Context);
  const { user } = state;

  return (
    <UserRoute>
      <div className="container-fluid gap">
        <div className="row">
          <div className="col-md-2 text-center">
            <UserNav />
          </div>
          <div className="col-md-10">Hey {user?.name}</div>
        </div>
      </div>
    </UserRoute>
  );
};

export default userIndex;

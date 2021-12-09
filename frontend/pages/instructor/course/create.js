import InstructorRoute from "../../../components/protectedRoute/InstructorRoute";
import InstructorNav from "../../../components/nav/InstructorNav";
const create = () => {
  return (
    <InstructorRoute>
      <div className="container-fluid gap">
        <div className="row">
          <div className="col-md-2 text-center">
            <InstructorNav />
          </div>
          <div className="col-md-10">create course</div>
        </div>
      </div>
    </InstructorRoute>
  );
};

export default create;

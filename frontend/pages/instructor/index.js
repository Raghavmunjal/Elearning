import InstructorNav from "../../components/nav/InstructorNav";
import InstructorRoute from "../../components/protectedRoute/InstructorRoute";

const instructorIndex = () => {
  return (
    <InstructorRoute>
      <div className="container-fluid gap">
        <div className="row">
          <div className="col-md-2 text-center">
            <InstructorNav />
          </div>
          <div className="col-md-10">Hey Instructor</div>
        </div>
      </div>
    </InstructorRoute>
  );
};

export default instructorIndex;

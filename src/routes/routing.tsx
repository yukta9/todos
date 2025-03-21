import { Route, Routes } from "react-router-dom";
import Content from "../web/pages/content";
import TaskDetails from "../web/pages/taskDetails";
import { Suspense } from "react";
import ProtectedRoute from "./protectedRoute";

const Routing: React.FC = () => {
  return (
    <Suspense>
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="*" element={<>404</>} />
          <Route path="/dashboard" element={<Content />} />
          <Route path="/task-details" element={<TaskDetails />} />
        </Routes>
      </ProtectedRoute>
    </Suspense>
  );
};

export default Routing;

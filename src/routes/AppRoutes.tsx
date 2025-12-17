import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "../components/common/ScrollToTop";
import SignIn from "../pages/AuthPages/SignIn";
import ForgetPass from "../pages/AuthPages/ForgetPassword";
import EmailCheck from "../pages/AuthPages/EmailCheck";
import ResetPassword from "../pages/AuthPages/ResetPassword";
import PasswordChanged from "../pages/AuthPages/PasswordChanged";
import { ProtectedRoute } from "../components/ProtectedRoute";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import Companies from "../pages/Companies/Companies";
import EditCompany from "../pages/Companies/EditCompany";
import AddCompany from "../pages/Companies/AddCompany";
import UserManagement from "../pages/UserManagement/UserManagement";
import MlModel from "../pages/MlModels/MlModels";
import NotFound from "../pages/OtherPage/NotFound";
import CreateModel from "../pages/MlModels/CreateModel";


export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPass/>} />
        <Route path="/checkyouremail" element={<EmailCheck/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
       <Route path="/passwordchanged" element={<PasswordChanged/>} />


        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          {/* Companies */}
          <Route path="companies" element={<Companies />} />
           <Route path="companies/add" element={<AddCompany  />} />
           <Route path="companies/edit" element={<EditCompany />} />
          {/* Users */}
          <Route path="users" element={<UserManagement />} />
          {/* ML Models */}
            <Route path="mlmodels" element={<MlModel />} />
          <Route path="mlmodels/create" element={<CreateModel />} />
        </Route>

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


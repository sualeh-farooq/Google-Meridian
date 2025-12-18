import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import AuthLayout from "../../layout/AuthPageLayout";


export default function ForgetPass() {
    const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login();
      navigate("/");
    }
  };
  return (
    <>

      <AuthLayout>
          <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">
              Forget Password
            </h1>
            <p className="text-sm text-gray-500">
              Enter your email address to receive a password reset link. Follow the instructions in the email to create a new password.
            </p>
          </div>
          <div>
            <form onSubmit={handleContinue}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>
                  </Label>
                  <Input 
                    placeholder="info@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Link
                    to="/signin"
                    className="w-full px-4 py-3 text-sm font-semibold rounded-lg transition bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 text-center"
                  >
                    Return to sign in
                  </Link>
                 <Link to={"/checkyouremail"}>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 text-sm font-semibold rounded-lg transition bg-slate-900 text-white shadow-theme-xs hover:bg-slate-950 disabled:bg-brand-300"
                  >
                    Continue
                  </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      </AuthLayout>
    </>
  );
}

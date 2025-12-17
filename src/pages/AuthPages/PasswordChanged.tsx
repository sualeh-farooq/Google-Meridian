
import { CheckCircle } from "lucide-react";
import AuthLayout from "../../layout/AuthPageLayout";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router";


export default function PasswordChanged() {

  return (
    <>

      <AuthLayout>
          <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
                <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 animate-bounce-slow">
                <CheckCircle className="text-white" size={40} />
              </div>
            </div>

          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 text-center font-semibold text-gray-800 text-title-sm sm:text-title-md">
              Password Changed!
            </h1>
            <p className="text-sm text-center  text-gray-500">
              Your password has been changed successfully.
            </p>

          </div>
              <div>
                <Link to="/signin">
                  <Button className="w-full" size="sm">
                    Back to Login
                  </Button>
                </Link>
                </div>
          
        </div>
      </div>
    </div>
      </AuthLayout>
    </>
  );
}

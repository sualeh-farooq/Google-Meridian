import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../components/ui/button/Button";
import AuthLayout from "../../layout/AuthPageLayout";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Separate states for eye icons
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Your reset password logic here
    login();
    navigate("/");
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div>
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">
                Reset Your Password
              </h1>
            </div>

            <form onSubmit={handleReset}>
              <div className="space-y-6">

                {/* New Password */}
                <div>
                  <Label>
                    New Password <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <Eye size={20} className="text-gray-500" />
                      ) : (
                        <EyeOff size={20} className="text-gray-500" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <Label>
                    Confirm Password <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showConfirmPassword ? (
                        <Eye size={20} className="text-gray-500" />
                      ) : (
                        <EyeOff size={20} className="text-gray-500" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                <Link to="/passwordchanged">
                  <Button className="w-full" size="sm">
                    Reset Password
                  </Button>
                </Link>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

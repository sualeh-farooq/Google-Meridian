import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../components/ui/button/Button";
import AuthLayout from "../../layout/AuthPageLayout";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate("/");
};

    
  return (
    <>

      <AuthLayout>
      <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-slate-800 text-title-sm sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-slate-500">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <form onSubmit={handleSignIn}>
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
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <Eye size={20} className="text-slate-500" />
                      ) : (
                        <EyeOff size={20} className="text-slate-500" />
                      )}
                    </span>
                  </div>
                </div>
            <Link to={"/forgetpassword"}>
                <div className="font text-sm text-right bg-slate-650 cursor-pointer pt-4">
                  <p>Forget Password?</p>
                </div>
            </Link>
                <div>
                  <Button className="w-full text-bg-slate-900" size="sm" >
                    Sign in
                  </Button>
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

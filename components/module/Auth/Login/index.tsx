// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import PHInput from "@/components/form/NRInput";
// import { Button } from "@/components/ui/button";
// import { useLoginMutation } from "@/redux/api/authApi";
// import { setUser } from "@/redux/features/authSlice";
// import { useAppDispatch } from "@/redux/hooks";

// import { setCookie } from "@/src/utils/cookies";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { jwtDecode, JwtPayload } from "jwt-decode";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { FormProvider, useForm } from "react-hook-form";
// import { toast } from "sonner";
// import z from "zod";

// type LoginFormValues = {
//   email: string;
//   password: string;
// };
// interface CustomJwtPayload extends JwtPayload {
//   role: string;
// }

// const schema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(4, "Password must be at least 4 characters"),
// });

// const LoginPage = () => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const [login, { isLoading }] = useLoginMutation() as any;

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data: LoginFormValues) => {
//     try {
//       const res = await login(data).unwrap();

//       if (res.success) {
//         const token = res.data.token;

//         setCookie(token);

//         const user = jwtDecode<CustomJwtPayload>(token);

//         dispatch(setUser({ token, user }));

//         toast.success(res.message || "Login successful!");

//         if (user?.role === "ADMIN") {
//           router.push("/admin/dashboard");
//         } else {
//           router.push("/");
//         }
//       } else {
//         toast.error(res.message || "Login failed");
//       }
//     } catch (error: any) {
//       toast.error(error?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="flex container items-center gap-28 px-4">
//         <div className="md:flex flex-col gap-6 rounded-lg min-h-[90vh]">
//           <div className="flex justify-between">
//             <Image
//               src="/images/otp.jpg"
//               alt="Logo"
//               width={800}
//               height={800}
//               className="object-cover h-40 w-[20%] rounded-lg"
//               priority
//             />
//           </div>
//           <div>
//             <Image
//               src="/images/otp.jpg"
//               alt="Logo"
//               width={800}
//               height={800}
//               className="object-cover h-[80vh] rounded-lg"
//               priority
//             />
//           </div>
//         </div>

//         <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
//           <Link href="/">
//             <Image
//               src="/Logo.png"
//               alt="Logo"
//               width={50}
//               height={50}
//               className="mx-auto mb-4 rounded-2xl"
//             />
//           </Link>
//           <h1 className="text-center text-2xl font-semibold">Welcome Back</h1>
//           <p className="mb-6 mt-3 text-center text-sm text-gray-600">
//             Sign in to your account
//           </p>
//           <FormProvider {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <PHInput
//                 control={form.control}
//                 name="email"
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your email"
//               />

//               <PHInput
//                 control={form.control}
//                 name="password"
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//               />

//               <div className="flex justify-end">
//                 <Link
//                   href="/forgot-password"
//                   className="text-sm text-primary hover:underline"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full py-6 font-semibold"
//               >
//                 {isLoading ? "Loading..." : "Sign In"}
//               </Button>
//             </form>
//           </FormProvider>
//           <p className="mt-6 text-center text-sm text-gray-600">
//             Don&apos;t have an account?{" "}
//             <Link href="/register" className="text-black hover:underline">
//               Sign Up
//             </Link>
//           </p>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 flex">
      {/* Left Sidebar */}
      <div className="w-1/2 bg-white border-r border-slate-200 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/r_logo.png"
              alt="SmartAuto Logo"
              width={200}
              height={200}
              className="h-52 w-52"
            />
          </div>
        </div>

        <div className="flex justify-between ">
          <Image
            src="/images/Typing.png"
            alt="SmartAuto Logo"
            width={12000}
            height={12000}
            className="object-cover rounded-lg me-11"
            priority
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="text-blue-400 text-5xl">💻</div>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome Back!
            </h1>
            <p className="text-slate-600 text-sm">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Sign Up
              </a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">
                Email Account
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">
                Password
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-11 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="remember" />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900 underline font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-lg mt-6"
            >
              Sign In
            </Button>
          </form>

          {/* Terms & Privacy */}
          <p className="text-xs text-slate-600 text-center mt-6">
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

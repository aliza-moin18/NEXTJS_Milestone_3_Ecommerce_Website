import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen"> 
      {/* Right Side - Login Form */}
      <div className="w-full flex flex-col items-center justify-center px-6 py-12 bg-white rounded-lg shadow-lg">
        
        {/* Brand Name (Instead of Logo Image) */}
        <h1 className="text-5xl font-extrabold text-[#b9937b] mb-8">Glow Skincare</h1>
        
        <h2 className="text-3xl font-bold text-[#714329] mb-4">Welcome Back!</h2>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Log in to your account and explore our premium skincare collection.
        </p>

        {/* Login Form */}
        <form className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#714329] text-white text-lg font-semibold rounded-md hover:bg-[#714329] transition duration-300"
            >
              Log In
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <Link href="/forgot-password" className="text-[#714329] hover:text-[#714329] text-sm">
              Forgot your password?
            </Link>
          </div>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-[#714329] hover:text-[#714329] font-semibold">
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
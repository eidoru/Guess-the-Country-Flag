import axios from "axios";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    axios.post("http://localhost:8080/api/signup", data).then((response) => {
      if (response.data.status) {
        navigate("/signin", { replace: true });
      }
    });
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-md bg-white p-12 shadow-md">
        <h1 className="text-2xl font-bold">Sign up to start playing</h1>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-96 gap-x-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="mt-2 w-full rounded-md p-2 text-sm shadow-sm outline-none ring-1 ring-inset ring-gray-300 transition focus:ring-2 focus:ring-inset focus:ring-blue-600"
                {...register("first_name", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="mt-2 w-full rounded-md p-2 text-sm shadow-sm outline-none ring-1 ring-inset ring-gray-300 transition focus:ring-2 focus:ring-inset focus:ring-blue-600"
                {...register("last_name", { required: true })}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-2 w-96 rounded-md p-2 text-sm shadow-sm outline-none ring-1 ring-inset ring-gray-300 transition focus:ring-2 focus:ring-inset focus:ring-blue-600"
              {...register("username", { required: true })}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 w-96 rounded-md p-2 text-sm shadow-sm outline-none ring-1 ring-inset ring-gray-300 transition focus:ring-2 focus:ring-inset focus:ring-blue-600"
              {...register("password", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-96 rounded-md bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:bg-blue-800"
          >
            Sign up
          </button>
        </form>
      </div>
      <p className="mt-10 text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/signin">
          <span className="font-semibold text-blue-600">Sign in</span>
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function App() {
  const form = useForm({
    defaultValues: {
      username: "zendaya",
      email: "",
      password: "",
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    console.log("Data", data);
  };

  return (
    <div className="bg-black w-full h-screen text-white px-20">
      <DevTool control={control} />
      <div className="w-[400px] ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col "
          noValidate
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="text-black"
            {...register("username", {
              required: "Username is required.",
            })}
          />
          <p>{errors.username?.message}</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="Email"
            className="text-black"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                message: "Invalid Email.",
              },
              validate: (d) => {
                return (
                  d !== "benzaminbikash@gmail.com" || "Enter another email"
                );
              },
            })}
          />

          <p>{errors.email?.message}</p>

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="text-black"
            {...register("age", {
              required: "Age is required.",
              max: { value: 50, message: "Maximum age is 50." },
              min: { value: 20, message: "Minimum age is 20." },
            })}
          />

          <p>{errors.age?.message}</p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="text-black"
          />
          <input className="bg-red-500 px-10 py-1 mt-3" type="submit" />
        </form>
      </div>
    </div>
  );
}
export default App;

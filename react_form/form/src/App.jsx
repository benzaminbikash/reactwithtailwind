import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function App() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      social: {
        facebook: "",
        tiktok: "",
      },
      phoneNumber: ["", ""],
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
    getValues,
    watch,
    setValue,
  } = form;

  // for watch
  // const watchValue = watch("username");
  // const watchValue = watch();
  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  const onSubmit = (data) => {
    console.log("Data", data);
  };
  const handlegetvalue = () => {
    // console.log("get values", getValues("username"));
    // console.log("get values", getValues());
    // console.log("get values", getValues(['username', 'email']));
  };

  const handleSetValue = () => {
    setValue("username", "zendaya", {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  // console.log(touchedFields, dirtyFields);
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
              disabled: watch("username") === "",
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
              valueAsNumber: true,
              required: "Age is required.",
              max: { value: 50, message: "Maximum age is 50." },
              min: { value: 20, message: "Minimum age is 20." },
            })}
          />
          <p>{errors.age?.message}</p>

          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: "Facebook id is required.",
            })}
            className="text-black"
          />
          <p> {errors.social?.facebook?.message}</p>
          <label htmlFor="tiktok">Tiktok</label>
          <input
            type="text"
            id="tiktok"
            {...register("social.tiktok", {
              required: "Titkok id is required.",
            })}
            className="text-black"
          />

          <label htmlFor="tiktok">Primary Phone Number</label>
          <input
            type="text"
            id="primary"
            {...register("phoneNumber.0", {
              required: "Primary phone number is required.",
            })}
            k
            className="text-black"
          />
          <label htmlFor="tiktok">Secondary Phone Number</label>
          <input
            type="text"
            id="secondary"
            {...register("phoneNumber.1", {
              required: "Secondary phone number is required.",
            })}
            k
            className="text-black"
          />

          <input className="bg-red-500 px-10 py-1 mt-3" type="submit" />
        </form>
        <button onClick={handlegetvalue}>Get Values</button>
        <button onClick={handleSetValue}>Set Values</button>
      </div>
    </div>
  );
}
export default App;

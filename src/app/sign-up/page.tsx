"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignUp() {
  const router = useRouter();

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      event.currentTarget.password.value !==
      event.currentTarget.confirmPassword.value
    ) {
      alert("Passwords doesn't match");
      return;
    }

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.currentTarget.username.value,
        password: event.currentTarget.password.value,
        name: event.currentTarget.nameUser.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === "ok") {
        router.push("/");
        return;
      }
      alert("There was an error");
      return;
    }
    alert("There was an error");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-screen flex justify-center items-center">
      <form
        onSubmit={submit}
        className="bg-white h-3/4 w-1/4 rounded-lg flex flex-col items-center"
      >
        <p className="font-semibold text-2xl my-12 text-zinc-700">Sign up</p>

        <div className="w-3/4">
          <p className="text-sm text-zinc-700">User Name</p>
          <div className="flex border-b-2 border-grey">
            <p className="m-2">👤</p>
            <input placeholder="Name" className="w-full m-2" name="nameUser" />
          </div>

          <p className="text-sm m-2 text-zinc-700">Email</p>
          <div className="flex border-b-2 border-grey">
            <p className="m-2">📧</p>
            <input placeholder="Email" className="w-full m-2" name="username" />
          </div>

          <p className="text-sm m-2 text-zinc-700">Password</p>
          <div className="flex border-b-2 border-grey">
            <p className="m-2">🔒</p>
            <input
              placeholder="Password"
              className="w-full m-2"
              type="password"
              name="password"
            />
          </div>

          <p className="text-sm m-2 text-zinc-700">Repeat password</p>
          <div className="flex border-b-2 border-grey">
            <p className="m-2">🔒</p>
            <input
              placeholder="Password"
              className="w-full m-2"
              type="password"
              name="confirmPassword"
            />
          </div>
        </div>

        <input
          className="my-8 text-sm flex justify-center flex-col items-center border-black border-0 text-zinc-600 w-1/2 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 rounded-lg hover:from-sky-300 hover:to-sky-100 cursor-pointer"
          type="submit"
          value="Sign up"
        ></input>
      </form>
    </div>
  );
}

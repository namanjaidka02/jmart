"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import loginPic from "../../../public/images/login-img.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (user.name === name && user.password === password) {
        return setTimeout(() => {
          router.push("/home");
        }, 1000);
      }
    });
    if (validateForm()) {
      return setIsSuccess(true);
    }

    setName("");
    setPassword("");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (name.trim() === "") {
      isValid = false;
      newErrors["name"] = "Username is required.";
    }
    if (password.trim() === "") {
      isValid = false;
      newErrors["password"] = "Password is required.";
    }
    setErrors(newErrors);
    return isValid;
  };

  const router = useRouter();

  return (
    <main className="md:flex justify-evenly items-center xxs:mt-[5rem] md:my-[13rem] xs:my-[12rem] lg:my-[8rem] sm:mx-[1rem] font-abel">
      <section className="lg:ml-[18rem] xxs:mx-auto md:mx-0 ">
        <form className="flex font-semibold flex-col justify-center  p-6 xxs:mx-[1rem] md:w-[20rem]  xs:mx-[2rem]  box-border rounded-3xl shadow-5xl">
          <p className="text-center mb-[50px] font-carattere sm:text-5xl xxs:text-4xl mt-5">
            Jmart
          </p>
          <label className="xl:text-xl xxs:text-sm pb-2 ">Name</label>
          <input
            type="text"
            value={name}
            placeholder="Your name"
            className=" p-1 pl-2 font-medium  border-4"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
          <label className="xl:text-xl pt-4 xxs:text-sm pb-2 ">Password</label>
          <input
            type="password"
            value={password}
            placeholder="*********"
            className="p-1 pl-2 font-medium border-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
          <button
            onClick={handleClick}
            className=" bg-red-300 rounded-lg xl:w-[25%] md:w-[35%] mt-7 m-auto p-2 sm:text-md xxs:text-[15px] hover:shadow-6xl hover:bg-red-400 "
          >
            Submit
          </button>
          <p className="text-center md:py-10 xxs:py-5 xxs:text-[14px] sm:text-[16px] lg:[20px]">
            Don`&apos;`t have an account?
            <span>
              <Link
                href="/signup"
                className="text-red-500 hover:underline pl-3"
              >
                Sign up
              </Link>
            </span>{" "}
          </p>
        </form>
      </section>
      <section className="lg-mr[30rem]">
        <Image
          src={loginPic}
          className="lg:w-[100%] xl:w-[80%] md:w-[100%] xxs:hidden md:block"
          alt="Login image"
          priority
        />
      </section>
    </main>
  );
};

export default Page;

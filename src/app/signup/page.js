"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import signupPic from "../../../public/images/signup-img.png";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const router = useRouter();

  if (isSuccess) {
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        name: name,
        email: email,
        password: password,
      };
      const newUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(newUsers));
      setUsers(newUsers);

      setIsSuccess(true);
    }

    // validateForm();
    console.log(name, email, password, confirmPassword);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name || typeof name !== "string" || !name.trim()) {
      isValid = false;
      newErrors["name"] = "Please enter your name.";
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      isValid = false;
      newErrors["email"] = "Please provide an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      newErrors["email"] = "Please provide a valid email address.";
    }

    if (!password || typeof password !== "string" || !password.trim()) {
      isValid = false;
      newErrors["password"] = "Please provide a password.";
    } else if (password.length < 6 || password.length >= 20) {
      isValid = false;
      newErrors[
        "password"
      ] = `The length of the password should be between 6 and 20 characters.`;
    }

    if (password !== confirmPassword) {
      isValid = false;
      newErrors["confirmPassword"] = "Passwords do not match.";
    }

    setErrors(newErrors);

    return isValid;
  };

  return (
    <main className="xl:flex justify-evenly items-center xl:mt-[7rem] md:mt-[10rem] xxs:mt-[5rem]  sm:mx-[1rem] md:flex font-abel ">
      <section className="lg:ml-[10rem] xxs:mx-auto  ">
        <form
          action="http://localhost:3000/login"
          method="POST"
          className="flex font-semibold flex-col justify-center  p-6 md:w-[18rem] xl:w-[30rem] box-border rounded-lg  shadow-3xl"
        >
          <p className="text-center xxs:mb-[50px]  font-carattere xl:text-5xl xxs:text-6xl xl:mt-5">
            Jmart
          </p>
          <label className="xl:text-2xl xxs:text-xl pb-2  ">Name</label>
          <input
            type="text"
            placeholder="eg: John Doe"
            className=" p-1 font-medium  border-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <label className="xl:text-xl xxs:text-xl pt-4 pb-2">Email</label>
          <input
            type="email"
            placeholder="eg: johndoe03@gmail.com"
            className=" p-1 font-medium   border-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <label className="xl:text-xl xxs:text-xl pt-4 pb-2">Password</label>
          <input
            type="password"
            placeholder="********"
            className=" p-1 font-medium   border-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <label className="xl:text-xl xxs:text-xl pt-4 pb-2 ">
            Confirn Password
          </label>
          <input
            type="password"
            placeholder="********"
            className=" p-1 font-medium   border-2"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {errors.confirmPassword && (
            <p className=" text-red-500">{errors.confirmPassword}</p>
          )}
          <button
            onClick={handleClick}
            className=" bg-sky-300 rounded-lg xl:w-[25%] xxs:w-[40%] xl:mt-5 xxs:mt-10 m-auto p-2 text-lg hover:shadow-4xl hover:bg-sky-400 "
          >
            Submit
          </button>
        </form>
      </section>
      <section>
        <Image
          src={signupPic}
          alt="signup image"
          priority
          className="xl:w-[80%] md:w-[100%] xxs:hidden md:block"
        />
      </section>
    </main>
  );
};

export default SignUp;

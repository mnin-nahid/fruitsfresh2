"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);


  if(session.status === "loading"){
    return <p>Loading...</p>;
  }
  if(session.status === "authenticated"){
    router?.push("/dashboard");
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email, 
      password,
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='email' className={styles.input} required />
        <input type="password" placeholder='password' className={styles.input} required />
        <button className={styles.button}>Login</button>
        {error && error}

      </form>
      <button 
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
        >
          Login with Google
      </button>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
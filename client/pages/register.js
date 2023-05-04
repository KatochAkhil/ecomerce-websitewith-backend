import Head from "next/head";
import Signup from "@/components/Auth/Signup";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register </title>
        <meta
          name="description"
          content="Ready to shop smarter? Register for an account and take advantage of our advanced search and filtering tools. Find exactly what you're looking for, every time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </>
  );
}

import Head from "next/head";
import LoginForm from "@/components/Auth/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Welcome back! Log in to your account and continue where you left off. View your wishlist, track your orders, and discover new products that match your interests"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </>
  );
}

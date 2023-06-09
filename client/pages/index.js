import { useEffect } from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Latest from "../components/Latest-men";
import LatestWomen from "../components/LatestWomen";
import KidzLatest from "../components/KidsLatest";
import Explore from "../components/Explore";
import Subscribe from "../components/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { allProductsAction } from "@/redux/action";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.data);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Latest />
      <LatestWomen />
      <KidzLatest />
      <Explore />
      <Subscribe />
    </>
  );
}

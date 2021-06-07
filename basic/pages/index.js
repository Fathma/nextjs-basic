import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/nav";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>list | Home</title>
      </Head>
      <div>
        <h1>gfhgfhfhgf</h1>
        <Link href={`/${2}`}>go</Link>
      </div>
    </>
  );
}

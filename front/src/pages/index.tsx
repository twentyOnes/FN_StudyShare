import Head from "next/head";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>스터디쉐어</title>
        <meta
          name="description"
          content="스터디 공유하는 플랫폼 프로젝트입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}

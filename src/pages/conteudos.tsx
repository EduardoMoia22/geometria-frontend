import Head from "../../node_modules/next/head";
import { Header } from "../components/Header/index";
import { CaretDoubleRight } from "../../node_modules/phosphor-react/dist/index";
import styles from "../../styles/Conteudo.module.scss";
import { useState } from "react";
import { Button } from "../components/ui/button/index";
import Link from "../../node_modules/next/link";
import fs from "fs";

type ContentProps = {
  metadata: {
    slug: string;
  };
  content: string;
};

interface ContentListProps {
  post: ContentProps[];
}

export default function Conteudo({ post }: ContentListProps) {
  const [contentsList, setContentsList] = useState(post || []);

  return (
    <>
      <Head>
        <title>Geometria - Conteúdos</title>
      </Head>

      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div>
            <h1>Conteúdos</h1>
            <CaretDoubleRight color="#119822" size={32} />
          </div>
          <div className={styles.cardWrapper}>
            {contentsList.map((item) => (
              <div key={item?.metadata.slug}>
                <strong>{item?.metadata.slug}</strong>
                <Button>
                  <Link href={`/conteudo/${item?.metadata.slug}`}>Acessar</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  function getAllPosts() {
    const allPostFileName = fs.readdirSync("./src/markdowns/");

    const dataPost = allPostFileName.map((filename) => {
      const fileContent = fs.readFileSync(`./src/markdowns/${filename}`);
      return {
        metadata: {
          slug: filename.replace(".md", ""),
        },
        content: fileContent.toString(),
      };
    });
    return dataPost;
  }

  const post = getAllPosts();
  return {
    props: {
      post,
    },
  };
}

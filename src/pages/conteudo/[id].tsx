import { useEffect, useState } from "react";
import Head from "../../../node_modules/next/head";
import { useRouter } from "../../../node_modules/next/router";
import { Header } from "../../components/Header/index";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../../../styles/ConteudoId.module.scss";
import ReactMarkdown from "../../../node_modules/react-markdown/index";
import fs from "fs";

interface PostProps {
  postContent: PostData;
}

type PostData = {
  slug: string;
  content: string;
};
export default function Conteudo({ postContent }: PostProps) {
  const content = postContent;
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>{content.slug}</title>
      </Head>

      <Header />

      <main className={styles.container}>
        <h1>{content.slug}</h1>

        <article className="prose prose-neutral dark:prose-invert">
          <ReactMarkdown>{content.content}</ReactMarkdown>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "sth" } }, { params: { id: "teste" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  function getContentOfFile() {
    const slug = params.id;
    const fileContent = fs.readFileSync(`./src/markdowns/${slug}.md`);

    return {
      slug: slug,
      content: fileContent.toString(),
    };
  }
  const postContent = getContentOfFile();
  return {
    props: {
      postContent,
    },
  };
}

import { useEffect, useState } from "react";
import Head from "../../../node_modules/next/head";
import { useRouter } from "../../../node_modules/next/router";
import { Header } from "../../components/Header/index";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../../../styles/ConteudoId.module.scss";
import ReactMarkdown from "../../../node_modules/react-markdown/index";
import { listConteudos } from "../../markdowns/content";

type Data = {
  id: string;
  title: string;
  content: string;
};

export default function Conteudo() {
  const [conteudos, setConteudos] = useState<Data[]>(listConteudos);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const param = router.query.id;

  const findContent = conteudos.find((conteudos) => conteudos.id === param);

  return (
    <>
      <Head>
        <title>{findContent?.title}</title>
      </Head>

      <Header />

      <main className={styles.container}>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            <h1>{findContent?.title}</h1>
            <article className="prose prose-neutral dark:prose-invert">
              <ReactMarkdown>{findContent?.content}</ReactMarkdown>
            </article>
          </>
        )}
      </main>
    </>
  );
}

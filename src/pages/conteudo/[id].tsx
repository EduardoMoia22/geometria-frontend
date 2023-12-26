import Head from "../../../node_modules/next/head";
import { useRouter } from "../../../node_modules/next/router";
import { Header } from "../../components/Header/index";
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
        <article className="prose prose-lg prose-neutral dark:prose-invert prose-p:text-white prose-p:text-lg">
          <ReactMarkdown>{content.content}</ReactMarkdown>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "calculo-de-area-em-plantas" } },
      { params: { id: "trigonometria-no-dia-a-dia" } },
      { params: { id: "teste" } },
    ],
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

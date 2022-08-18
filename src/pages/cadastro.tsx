import Head from "../../node_modules/next/head";
import { Header } from "../components/Header/index";
import { Input, TextArea } from "../components/ui/input/index";
import styles from '../../styles/Cadastro.module.scss'
import { Button } from "../components/ui/button/index";
import { FormEvent, useState } from "react";
import { api } from "../services/api";

export default function CadastrarConteudo(){
  const [title, setTitle] = useState('')
  const [markdown, setMarkdown] = useState('')
  
  async function handleSubmit(e: FormEvent){
    e.preventDefault()

    try {
      const data = new FormData();

      data.append("title", title);
      data.append("content", markdown);

      await api.post("/content", data)
    }catch(err){
      console.log(err)
    }
  }
  return(
    <>
      <Head>
        <title>Geometria - Cadastro</title>
      </Head>

      <Header />

      <main>
        <form className={styles.container} onSubmit={handleSubmit}>
          <Input type="text" placeholder="Título do conteúdo..." value={title} onChange={(e) => setTitle(e.target.value)}/>
          <TextArea placeholder="Markdown..." value={markdown} onChange={(e) => setMarkdown(e.target.value)}/>
          <Button>
            Cadastrar
          </Button>
        </form>
      </main>
    </>
  )
}
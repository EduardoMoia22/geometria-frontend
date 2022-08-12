import Head from "../../node_modules/next/head";
import { Header } from "../components/Header/index";
import { CaretDoubleRight } from "../../node_modules/phosphor-react/dist/index";
import styles from '../../styles/Conteudo.module.scss'
import { api } from "../services/api";
import { useState } from "react";

type ContentProps = {
  id: string;
  title: string;
  content: string;
}

interface ContentListProps{
  contents: ContentProps[]; 
}

export default function Conteudo({contents}: ContentListProps){
  
  const [contentsList, setContentsList] = useState(contents || [])
  
  return(
    <>
      <Head>
        <title>Geometria - Conteúdos</title>
      </Head>

      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div>
            <h1>Conteúdos</h1>
            <CaretDoubleRight color="#119822" size={32}/>
          </div>
            <div className={styles.cardWrapper}>
              {contentsList.map((item) => (
                <div key={item.id}>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const response = await api.get('/contents')

  console.log(response.data)
  
  return{
    props:{
      contents: response.data
    }
  }
}
import { useEffect, useState } from "react"
import Head from "../../../node_modules/next/head";
import { useRouter } from "../../../node_modules/next/router"
import { Header } from "../../components/Header/index";
import { AuthContext } from "../../contexts/AuthContext"
import { api } from "../../services/api"
import styles from '../../../styles/ConteudoId.module.scss'
import ReactMarkdown from "../../../node_modules/react-markdown/index";


interface Data{
  id: string;
  title: string;
  content: string;
}

export default function Conteudo(){
  
  const [conteudos, setConteudos] = useState<Data>()
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const param = router.query.id

  useEffect(()=>{
    async function getContent(){
      setLoading(true)
      
      const response = await api.get('/content/detail', {
        params:{
          conteudoId: param
        }
      })
      
      const {id, title, content} = await response.data as Data
      
      let data = {
        id, title, content
      }
      setConteudos(data)
      setLoading(false)
    }
    
    getContent()
    
  }, [param])
  return(
    <>
      <Head>
        <title>{conteudos?.title}</title>
      </Head>

      <Header />

      <main className={styles.container}>
        {loading ? (
          <h1>Carregando...</h1>
        ): (
          <>
            <h1>
              {conteudos?.title}
            </h1>
            <article className="prose prose-neutral dark:prose-invert">
              <ReactMarkdown>
                {conteudos?.content}
              </ReactMarkdown>
            </article>
          </>
        )}
      </main>
    </>
  )
}


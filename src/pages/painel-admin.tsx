import Head from "../../node_modules/next/head";
import { Input } from "../components/ui/input/index";
import styles from '../../styles/Login.module.scss'
import { Button } from "../components/ui/button/index";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Link from "../../node_modules/next/link";

export default function Login(){
  const [loading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)
  
  async function handleSubmit(e: FormEvent){
    e.preventDefault()
    
    setIsLoading(true)

    let data = {
      email: email,
      password: password
    }

    await signIn(data)

    setIsLoading(false)
    
  }

  return(
    <>
      <Head>
        <title>Painel - Faça seu login</title>
      </Head>

      <main className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>Logo</h1>

          <div>
            <Input
              type='email'
              placeholder="Digite seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type='password'
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              loading={loading}
            >
              Acessar
            </Button>

            <Link href='/'>
              <a className={styles.link}>Não possui uma conta? <span>Cadastre-se aqui!</span></a>
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}
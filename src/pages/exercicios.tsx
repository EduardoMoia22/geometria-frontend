import { useState } from "react";
import Head from "../../node_modules/next/head";
import { Header } from "../components/Header/index";
import { allQuestions } from "../questions/questions";
import style from "../../styles/Exercicio.module.scss";
import { AnswerButton } from "../components/ui/answerButton/index";

export default function Exercicios() {
  const [questions, setQuestions] = useState(allQuestions);
  const [correct, setCorrect] = useState(false);

  function handleClickAnswer(isCorrect: boolean) {
    console.log(isCorrect);
  }

  return (
    <>
      <Head>
        <title>Geometria - Exercícios</title>
      </Head>

      <Header />

      <main className={style.container}>
        {questions.map((item) => (
          <article key={item.id}>
            <h1>{item.question}</h1>
            <div>
              {item.answer.map((answer) => (
                <div key={answer.id}>
                  <button onClick={() => setCorrect(answer.correct)}>
                    <span>{answer.content}</span>
                  </button>
                </div>
              ))}

              <h1>{correct ? <strong>Correto!</strong> : <strong></strong>}</h1>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

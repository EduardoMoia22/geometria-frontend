import Head from "../../node_modules/next/head";
import { Header } from "../components/Header/index";
import styles from "../../styles/Aula.module.scss";
import "@vime/core/themes/default.css";
import { Button } from "../components/ui/button/index";
import Link from "../../node_modules/next/link";
import { CaretDoubleRight } from "../../node_modules/phosphor-react/dist/index";
import React from "react";
import ReactPlayer from "../../node_modules/react-player/lib/index";

export default function Aulas() {
  const aulas = [
    {
      id: "1",
      aula: "aula-1",
      title: "GEOMETRIA: CONCEITOS BÁSICOS",
      url: "https://www.youtube.com/watch?v=JRsDEkW_6O0",
    },
    {
      id: "2",
      aula: "aula-2",
      title: "ÁREA DAS FIGURAS PLANAS",
      url: "https://www.youtube.com/watch?v=th5k6bzSDTA",
    },
    {
      id: "3",
      aula: "aula-3",
      title: "GEOMETRIA EM NOSSO COTIDIANO",
      url: "https://www.youtube.com/watch?v=Mo5ThaSvU2g",
    },
    {
      id: "4",
      aula: "aula-4",
      title: "DETERMINE A ALTURA DO PRÉDIO",
      url: "https://www.youtube.com/watch?v=uaDFyh5by2o",
    },
    {
      id: "5",
      aula: "aula-6",
      title: "CÁLCULO DA ÁREA DA PLANTA ",
      url: "https://www.youtube.com/watch?v=f9hgWOHLbno",
    },
  ];

  return (
    <>
      <Head>
        <title>Geometria - Aulas</title>
      </Head>

      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div>
            <h1>Aulas</h1>
            <CaretDoubleRight color="#119822" size={32} />
          </div>
          <div className={styles.cardWrapper}>
            {aulas.map((item) => (
              <div key={item?.id}>
                <strong>{item?.title}</strong>
                <Button>
                  <a href={item?.url} target="_blank" rel="noreferrer">
                    Acessar
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

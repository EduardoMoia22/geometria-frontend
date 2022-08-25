export interface AllQuestionProps {
  id: string;
  category: string;
  question: string;
  answer: AnswerProps[];
}

type AnswerProps = {
  id: string;
  content: string;
  correct: boolean;
};

export const allQuestions: Array<AllQuestionProps> = [
  {
    id: "1",
    category: "Geometria",
    question:
      "Temos um triângulo equilátero de lado 6cm. Qual é o perímetro e qual é a área deste triângulo?",
    answer: [
      {
        id: "1",
        content: "Resposta teste",
        correct: false,
      },
      {
        id: "2",
        content: "Resposta teste2",
        correct: false,
      },
      {
        id: "3",
        content: "Resposta teste3",
        correct: true,
      },
      {
        id: "4",
        content: "Resposta teste4",
        correct: false,
      },
    ],
  },
  {
    id: "2",
    category: "teste",
    question: "Pergunta de teste",
    answer: [
      {
        id: "1",
        content: "Resposta teste",
        correct: true,
      },
      {
        id: "2",
        content: "Resposta teste2",
        correct: false,
      },
      {
        id: "3",
        content: "Resposta teste3",
        correct: false,
      },
      {
        id: "4",
        content: "Resposta teste4",
        correct: false,
      },
    ],
  },
  {
    id: "3",
    category: "teste",
    question: "Pergunta de teste",
    answer: [
      {
        id: "1",
        content: "Resposta teste",
        correct: false,
      },
      {
        id: "2",
        content: "Resposta teste2",
        correct: false,
      },
      {
        id: "3",
        content: "Resposta teste3",
        correct: true,
      },
      {
        id: "4",
        content: "Resposta teste4",
        correct: false,
      },
    ],
  },
  {
    id: "4",
    category: "teste",
    question: "Pergunta de teste",
    answer: [
      {
        id: "1",
        content: "Resposta teste",
        correct: false,
      },
      {
        id: "2",
        content: "Resposta teste2",
        correct: false,
      },
      {
        id: "3",
        content: "Resposta teste3",
        correct: true,
      },
      {
        id: "4",
        content: "Resposta teste4",
        correct: false,
      },
    ],
  },
  {
    id: "5",
    category: "teste",
    question: "Pergunta de teste",
    answer: [
      {
        id: "1",
        content: "Resposta teste",
        correct: false,
      },
      {
        id: "2",
        content: "Resposta teste2",
        correct: false,
      },
      {
        id: "3",
        content: "Resposta teste3",
        correct: true,
      },
      {
        id: "4",
        content: "Resposta teste4",
        correct: false,
      },
    ],
  },
];

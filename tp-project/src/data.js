export const questions = [
  {
    langage: "symfony",
    title: "Symfony design pattern",
    choices: ["MMV", "MVC", "MMVV"],
    response: 1,
    coef: 1,
    type: "select",
    name: "symfony",
    feedback: "Symfony est basé sur le pattern MVC",
    desc:
      "Sélectionnez ci-dessous dans la liste la bonne définition caractérisant ce framework PHP",
  },
  {
    langage: "react",
    title: "React est-il un framework ?",
    choices: ["yes", "no"],
    response: 1,
    coef: 2,
    type: "radio",
    name: "react",
    feedback: "React est une librairie",
    desc: "Répondez en choisissant une seule et bonne réponse ci-dessous :",
  },
  {
    langage: "jsx",
    title: "JSX c'est quoi ?",
    choices: [
      "JSX est un langage compilé",
      "JSX est un sur-ensemble développé par Facebook",
    ],
    response: 1,
    coef: 2,
    type: "radio",
    name: "jsx",
    feedback: "JSX est un sur ensemble à JS",
    desc: "Répondez en choisissant une seule et bonne réponse ci-dessous :",
  },
];

let jokes = [
  {
    id: 1,
    question: "How did the programmer die in the shower?",
    answer: "He read the shampoo bottle instructions: Lather. Rinse. Repeat",
  },
  {
    id: 2,
    question: "What is the golden rule in programming?",
    answer: "If it works, don't touch it.",
  },
];
let nextId = jokes.length;

export const getJokes = (req, res) => {
  setTimeout(() => {
    res.send(jokes);
  }, [5000]);
};

export const createJoke = (req, res) => {
  let newJoke = req.body;
  console.log(newJoke)
  newJoke.id = nextId;
  jokes = [...jokes, newJoke];
  res.send(newJoke);
};

export const deleteJoke = (req, res) => {
  const { id } = req.params;
  jokes = jokes.filter((joke) => joke.id !== id);
  res.send("joke deleted");
};

export const updateJoke = (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  const joke = jokes.find((joke) => joke.id === id);
  if (joke) {
    joke.question = question;
    joke.answer = answer;
    res.send("joke updated");
  }
  res.send("error updating joke");
};



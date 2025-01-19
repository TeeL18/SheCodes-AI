function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "oe47bb3454cd0f1af7dfdf430teb7c08";
let context =
  "provide a precise and short simple answer. Please make sure just to pick one answer;";
let prompt = "who was the first femalew president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);

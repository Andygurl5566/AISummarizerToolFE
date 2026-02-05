async function analyzeText() {
  const text = document.getElementById("input").value;

  const response = await fetch("/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
}

const data = await response.json();
console.log(data);

function App() {
  <></>;
}

export default App;

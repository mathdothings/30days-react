import "./App.css";

const Title = ({ color, fontFamily, textAlign, content }) => (
  <h1 style={{ color, fontFamily, textAlign }}>{content}</h1>
);

const Paragraph = ({ color, fontFamily, textAlign, content }) => (
  <p style={{ color, fontFamily, textAlign }}>{content}</p>
);

const Input = ({ type, placeholder, fontFamily }) => (
  <input type={type} placeholder={placeholder} style={{ fontFamily }} />
);

const Button = ({ content, color, bgColor, padding }) => (
  <button style={{ color, bgColor, padding }}>{content}</button>
);

function App() {
  return (
    <article>
      <Title
        color="goldenrod"
        fontFamily="Arial"
        textAlign="center"
        content="Subscribe"
      />
    </article>
  );
}

export default App;

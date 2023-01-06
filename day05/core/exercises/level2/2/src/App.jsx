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

const Button = ({ content, color, backgroundColor, padding }) => (
  <button style={{ color, backgroundColor, padding }}>{content}</button>
);

function App() {
  return (
    <>
      <header>
        <Title
          color=""
          fontFamily="Arial"
          textAlign="center"
          content="Subscribe"
        />
        <Paragraph
          color="gray"
          content="Sign up with your email address to receive news and updates."
          textAlign="center"
        />
      </header>
      <main>
        <section>
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="Email" />
        </section>
        <section>
          <Button
            content="Subscribe"
            color="white"
            backgroundColor="salmon"
            padding="0.35rem 0.75rem"
          />
        </section>
      </main>
      <footer>
        <small>Coded by: @mathdothings</small>
      </footer>
    </>
  );
}

export default App;

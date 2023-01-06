import "./App.css";

const Math = {
  image: "https://via.placeholder.com/150",
  name: "Mathdothings",
  title: "Junior Developer",
  place: "Worthland",
  skills: ["HTML", "CSS", "JS", "React"],
};

const Elon = {
  image: "https://via.placeholder.com/150",
  name: "Elon Musk",
  title: "CEO at Space X, Tesla and has his own world",
  place: "Mars",
  skills: ["Money", "Money", "Money", "Money"],
};

const Bill = {
  image: "https://via.placeholder.com/150",
  name: "Bill Gates",
  title: "CEO at Microsoft, Github and loves cake smashing on his face",
  place: "USA",
  skills: ["Money", "Money", "Money", "Money"],
};

const Button = ({ content }) => <button type="button">{content}</button>;

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.image} alt="user photo" />
      <h1>{user.name}</h1>
      <small>
        {user.title}, {user.place}
      </small>
      <h2>Skills</h2>
      {user.skills.map((skill, index) => (
        <Button content={skill} key={index} />
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <UserCard user={Math} />
      <UserCard user={Elon} />
      <UserCard user={Bill} />
    </>
  );
}

export default App;

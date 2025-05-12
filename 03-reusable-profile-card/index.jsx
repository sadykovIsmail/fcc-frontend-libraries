export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  return (
    <div className = "flex-container">
<Card
        name="Mark"
        title="Frontend developer"
        bio="I like to work with different frontend technologies and play video games."
      />
  
<Card
        name="Tiffany"
        title="Engineering manager"
        bio="I like to work with different frontend technologies and play video games."
      />

      <Card
        name="Doug"
        title="Backend developer"
        bio="I have been a software developer for over 20 years and I love working with Go and Rust."
        />
    </div>
  );
}
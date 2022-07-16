import User from "./User";
import Suggestion from "./Suggestion";

export default function Sidebar() {
  const suggestions = [
    {
      image: "badvibesmemes",
      user: "bad.vibes.memes",
      text: "Segue você",
    },
    {
      image: "chibirdart",
      user: "chibirdart",
      text: "Segue você",
    },
    {
      image: "razoesparaacreditar",
      user: "razoesparaacreditar",
      text: "Novo no Instagram",
    },
    {
      image: "adorableanimals",
      user: "adorable_animals",
      text: "Segue você",
    },
    {
      image: "smallcutecats",
      user: "smallcutecats",
      text: "Segue você",
    },
  ];

  return (
    <aside>
      <div className="suggestions-header">
        <p>Sugestões para você</p>
        <button>Ver tudo</button>
      </div>

      <User size="large" image="catanacomics" user="catanacomics" text="Catana" cls="you" />
      {suggestions.map(suggestion => (
        <Suggestion {...suggestion} />
      ))}
      <p className="disclamer">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas
        mais relevantes • Hashtags • Idioma
      </p>

      <p className="copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
    </aside>
  );
}

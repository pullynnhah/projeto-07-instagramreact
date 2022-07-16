import User from "./User";

export default function Suggestion(props) {
  return (
    <div className="suggestion">
      <User size="small" cls="" {...props} />
      <button>Seguir</button>
    </div>
  );
}

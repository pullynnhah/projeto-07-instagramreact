import Story from "./Story";

export default function Stories() {
  const users = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawiwacomicsa",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];

  return (
    <section className="stories border">
      {users.map(user => (
        <Story user={user} />
      ))}
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </section>
  );
}

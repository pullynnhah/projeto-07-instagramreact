export default function NavbarDesktop() {
  return (
    <nav>
      <div className="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="assets/images/logo.png" alt="logo instagram" />
      </div>
      <input type="text" placeholder="Pesquisar" />
      <div className="actions">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </nav>
  );
}

import logo from "./assets/logo.png";
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      <main className="content">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="info">
          Envio mais <br /> rápido do Brasil.
        </h1>
      </main>
      <main className="login">
        <h2>
          Juntos. De mãos <br /> dadas, ou não.
        </h2>

        <div className="input-group">
          <label htmlFor="#">Seu usuário, e-mail ou telefone</label>
          <input type="text" />
        </div>

        <div className="input-group">
          <label htmlFor="#">Sua senha</label>
          <input type="text" />
        </div>
        <a href="#">Esqueceu a sua senha?</a>

        <div className="container-buttons">
          <div>
            <input type="checkbox" placeholder="Lembre-se de mim" />
            <label>Lembre-se de mim</label>
          </div>
          <button>Entrar</button>
        </div>

        <footer>
          <p>Ainda não tem uma conta? </p>
          <a href="">Crie sua conta agora</a>
        </footer>
      </main>
    </div>
  );
}

export default App;

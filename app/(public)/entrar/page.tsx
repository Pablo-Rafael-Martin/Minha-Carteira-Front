import Link from "next/link";
import './style.css';

export default function Page() {
    return (
        <div id="wrapper">
            <h1>Minha Carteira</h1>
            <form action="" method="post">
                <input placeholder="E-mail" type="email" name="E-mail" id="e-mail-form" />
                <input placeholder="Senha" type="password" name="Senha" id="senha-form" />
                <button type="submit">Entrar</button>
            </form>
            <Link href='/cadastrar'>Primeira vez? Cadastre-se!</Link>
        </div>
    )
  }
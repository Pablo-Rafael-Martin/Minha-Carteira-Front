import Link from "next/link";
import './style.css'

export default function Cadastrar(){
    return (
        <div id="wrapper">
            <h1>Minha Carteira</h1>
            <form action="" method="post">
                <input placeholder="Nome" type="name" id="nome-form" />
                <input placeholder="E-mail" type="email" name="E-mail" id="e-mail-form" />
                <input placeholder="Senha" type="password" name="Senha" id="senha-form" />
                <input placeholder="Confirme a senha" type="password" name="Confirme-a-senha" id="confirme-a-senha" />
                <button type="submit">Entrar</button>
            </form>
            <Link href='/entrar'>Já tem uma conta? Entre agora!</Link>
        </div>
    )
}
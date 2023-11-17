import React, { useState, useEffect } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
    const nomeEditora = props.getNomeEditora(props.livro.codEditora)

    return (
        <tr>
            <td>
                <td>{props.livro.titulo}</td>
                <button className="btn btn-danger" onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
            </td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const livrosObjeto = controleLivro.obterLivros();
        setLivros(livrosObjeto);
        setCarregado(true);
    }, []);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setLivros(livros.filter(livro => livro.codigo !== codigo));
        setCarregado(false);
    }

    const getNomeEditora = (codEditora) => {
        return controleEditora.getNomeEditora(codEditora);
    }

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={() => excluir(livro.codigo)}
                            getNomeEditora={getNomeEditora}
                        />
                    ))}
                </tbody>
            </table>
        </main >
    )
}

export default LivroLista;
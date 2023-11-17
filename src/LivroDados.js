import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivro } from "./controle/ControleLivros";

const LivroDados = (props) => {
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(0);
    const [opcoes, setOpcoes] = useState([]);

    const navigate = useNavigate();
    const controleLivro = new ControleLivro();

    useEffect(() => {
        const controleEditora = new ControleEditora();
        const editoras = controleEditora.getEditoras();
        const opcoesMapeadas = editoras.map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        }));
        setOpcoes(opcoesMapeadas);
    }, []);

    const tratarCombo = (e) => {
        const novoCodEditora = Number(e.target.value);
        setCodEditora(novoCodEditora);
    };

    const incluir = (e) => {
        e.preventDefault();

        const autoresArray = autores.split('\n');

        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autoresArray,
            codEditora,
        };

        controleLivro.incluir(novoLivro);

        navigate('/')
    };

    return (
        <main>
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <label className="form-label" htmlFor="tituloInput">Título</label>
                <div id="1">
                    <input
                        type="text"
                        id="tituloInput"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>


                <label className="form-label" htmlFor="resumoInput">Resumo</label>
                <div id="2">
                    <textarea
                        type="text"
                        id="resumoInput"
                        className="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>

                <label className="form-label" htmlFor="editoraSelect">Editora</label>
                <div id="3">
                    <select
                        id="editoraSelect"
                        className="form-control"
                        value={codEditora}
                        onChange={tratarCombo}
                    >
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>

                <label className="form-label" htmlFor="autoresInput">Autores (1 por linha)</label>
                <div id="4">
                    <textarea
                        id="autoresInput"
                        className="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>

                <div id="botao-salvar">
                    <button className="btn btn-primary" type="submit">Salvar Dados</button>
                </div>
            </form>
        </main >
    );
};

export default LivroDados;
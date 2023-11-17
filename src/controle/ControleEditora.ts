import { Editora } from "../modelo/Editora";

const editoras: Editora[] = [
    new Editora(2, 'Alta Books'),
    new Editora(3, 'Pearson'),
    new Editora(4, 'Addison Wesley'),
];

export class ControleEditora {
    getNomeEditora(codEditora: number): string {
        const editora = editoras.filter(e => e.codEditora === codEditora);
        return editora.length > 0 ? editora[0].nome : '';
    }

    getEditoras(): Editora[] {
        return editoras;
    }
}
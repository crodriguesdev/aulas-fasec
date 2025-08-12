import { HtmlBasePlugin } from "@11ty/eleventy";
import PluginMinifier from "@codestitchofficial/eleventy-plugin-minify";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(PluginMinifier);

    eleventyConfig.addCollection('semestres', (collectionApi) => {
        const disciplinas = collectionApi.getFilteredByTag('disciplina');
        const semestres = disciplinas.map(d => d.data.semestre);
        const semestresUnicos = [...new Set(semestres)];

        return semestresUnicos.reduce((prev, s) => {
            const disciplinasDoSemestre = disciplinas.filter(d => d.data.semestre === s);
            return [...prev, [s, disciplinasDoSemestre]];
        }, []);
    });

    eleventyConfig.addFilter('dateString', function(date) {
        return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    });
};

export const config = {
    dir: {
        input: 'src',
        output: 'public',
        layouts: '_layouts',
    },
    pathPrefix: '/aulas-fasec/',
}

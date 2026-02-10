import { HtmlBasePlugin } from "@11ty/eleventy";
import PluginMinifier from "@codestitchofficial/eleventy-plugin-minify";
import pluginMermaid from "@kevingimbel/eleventy-plugin-mermaid";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import mathup from "mathup";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(PluginMinifier);
    eleventyConfig.addPlugin(pluginMermaid, {
        mermaid_js_src: 'https://unpkg.com/mermaid@10/dist/mermaid.esm.min.mjs',
    });
    eleventyConfig.addPlugin(syntaxHighlight);

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

    eleventyConfig.addShortcode('math', function(expression, display = false) {
        return mathup(expression, { display: display ? 'block' : 'inline' }).toString();
    });

    eleventyConfig.addPassthroughCopy('src/_static')
};

export const config = {
    dir: {
        input: 'src',
        output: 'public',
        layouts: '_layouts',
    },
    pathPrefix: '/aulas-fasec/',
}

import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['clients/ts/main.page.ts'],
  bundle: true,
  minify: true,
  external: ["potree"],
  outfile: 'clients/public/js/main.page.js',
});
const { build } = require("esbuild");

build({
  entryPoints: ["./src/contracts/user.ts"],
  outdir: "./dist",
  minify: false,
  bundle: false,
}).catch(() => process.exit(1));

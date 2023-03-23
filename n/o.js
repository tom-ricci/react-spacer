const min=require("dts-minify"),ts=require("typescript"),fs=require("fs");fs.writeFileSync("./k/m.d.ts",min.createMinifier(ts).minify(fs.readFileSync("./k/m.d.ts","utf-8"),{keepJsDocs:!0}));

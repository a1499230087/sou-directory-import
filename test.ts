import { directoryImport } from "index";
import path from "path";
console.log(path.join(__dirname, './src'));

let modules = directoryImport({
    targetDirectoryPath: path.join(__dirname, './src'),
    importPattern: /\.ts$/,
})

console.log(modules);

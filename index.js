import { env, camelCase, capitalizeWithSpaces } from "./config.js";
import fs from "fs";

if (Object.values(env).includes(undefined)) {
    console.error('You must create a .env file based on .env.example and fill in all the fields');
    process.exit(1);
}

const content = `[Desktop Entry]
Name=${capitalizeWithSpaces(env.name)}
Comment=${env.comment}
Exec=${env.execDir}
Icon=${env.icondir}
Categories=${env.categories}
Type=Application
Terminal=false`;

const success = `
Success! You should check ./generated directory and move the file to ~/.local/share/applications (Your user), or /usr/share/applications (All users, sudo required). 
Run sudo update-desktop-database to display your app in your Desktop Apps
`
fs.mkdir('generated', { recursive: true }, (e) => {
    if (e) throw e;
    console.log('...');
});

fs.writeFile(`generated/${camelCase(env.name)}.desktop`, content, (e) => {
    if (e) throw e;
    console.log(success);
});
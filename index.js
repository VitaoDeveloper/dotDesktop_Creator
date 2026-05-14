import { env, camelCase, capitalizeWithSpaces } from "./config.js";
import fs from "fs";

const content = `[Desktop Entry]
Name=${capitalizeWithSpaces(env.name)}
Comment=${env.comment}
Exec=${env.execDir}
Icon=${env.icondir}
Categories=${env.categories}
Type=Application
Terminal=false`;

fs.writeFile(`${camelCase(env.name)}.desktop`, content, (e) => {
    if (e) throw e;
    console.log('Success! You should move the file to ~/.local/share/applications (Your user), or /usr/share/applications (All users, sudo required)');
    
});

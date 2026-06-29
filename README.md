# DotDesktop Creator

Generate `.desktop` files for Linux from a `.env` file.

## Quick start

```bash
cp .env.example .env
# Fill in NAME, COMMENT, EXEC_DIR, ICON_DIR, CATEGORIES
pnpm dev
```

The `.desktop` file will be created in `./generated/`.

## Binary (no dependencies)

`DotDesktop_Creator` is a compiled binary for `linux-x64` (Node 18).  
Download, make it executable, and run:

```bash
chmod +x DotDesktop_Creator
./DotDesktop_Creator
```

## Variables

| Variable    | Description                   | Example                       |
|-------------|-------------------------------|-------------------------------|
| `NAME`      | Application name              | `My App`                      |
| `COMMENT`   | Short description             | `Text editor`                 |
| `EXEC_DIR`  | Path to the executable        | `/usr/bin/myapp`              |
| `ICON_DIR`  | Path to the icon              | `/usr/share/icons/myapp.png`  |
| `CATEGORIES`| Semicolon-separated categories| `Development;Utility;`        |

## Installing the generated file

```bash
mv generated/myApp.desktop ~/.local/share/applications/
sudo update-desktop-database
```
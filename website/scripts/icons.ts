import path from "path";
import fs from "fs";

async function main() {
  const siteDir = path.join(__dirname, "..");
  const iconDir = path.join(siteDir, "static", "img", "icons");

  const icons = getSidebarIcons(iconDir);
  console.log(`Found ${icons.length} icons`);

  const css = generateSidebarCSS(icons);
  fs.writeFileSync(path.join(siteDir, "src", "css", "my-icons.css"), css);
}

main()
  .then()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export interface IDirectoryData {
  name: string;
  logo: string;
  logoDark?: string;
}

function getSidebarIcons(dir: string): Array<IDirectoryData> {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const directoryData: Array<IDirectoryData> = [];

  for (const file of files) {
    if (!file.isDirectory()) {
      continue;
    }

    const dirPath = path.join(dir, file.name);

    let logo: string | undefined;
    if (fs.existsSync(path.join(dirPath, "logo.svg"))) {
      logo = svgToDataUri(path.join(dirPath, "logo.svg"));
    } else if (fs.existsSync(path.join(dirPath, "light.svg"))) {
      logo = svgToDataUri(path.join(dirPath, "light.svg"));
    } else if (fs.existsSync(path.join(dirPath, "logo.png"))) {
      logo = pngToDataUri(path.join(dirPath, "logo.png"));
    } else if (fs.existsSync(path.join(dirPath, "light.png"))) {
      logo = pngToDataUri(path.join(dirPath, "light.png"));
    }
    if (!logo) {
      continue;
    }

    let logoDark: string | undefined;
    if (fs.existsSync(path.join(dirPath, "dark.svg"))) {
      logoDark = svgToDataUri(path.join(dirPath, "dark.svg"));
    } else if (fs.existsSync(path.join(dirPath, "dark.png"))) {
      logo = pngToDataUri(path.join(dirPath, "dark.png"));
    }

    directoryData.push({
      name: file.name,
      logo,
      logoDark,
    });
  }

  // should already be sorted when we read the directory contents
  return directoryData.sort((a, b) => a.name.localeCompare(b.name));
}

function generateSidebarCSS(sidebarIcons: Array<IDirectoryData>): string {
  const variables: { name: string; value: string }[] = [];

  let css = "";
  sidebarIcons.forEach(({ name, logo, logoDark }) => {
    const varName = `--${name}-icon`;
    const varNameDark = `--${name}-icon-dark`;

    variables.push({ name: varName, value: `url("${logo}");` });

    // Add sidbar icon
    css += `
/* ${name.toUpperCase()} */
.sidebar__${name} :is(a, li)::before {
  width: 1.5rem;
  height: 1.5rem;
  padding-right: 0.25rem;
  vertical-align: middle;
  content: " ";
  background: var(${varName})
    no-repeat;
}
`;
    if (logoDark) {
      variables.push({ name: varNameDark, value: `url("${logoDark}");` });
      css += `
[data-theme="dark"] .sidebar__${name} :is(a, li)::before {
  background: var(${varNameDark})
    no-repeat;
}
`.trimStart();
    }

    css = css + "\n";

    // Add heading icon
    css += `
.heading_icon__${name}::before {
  width: 16px;
  height: 16px;
  display: inline-flex;
  vertical-align: middle;
  content: " ";
  background: var(${varName})
    no-repeat;
}
`.trimStart();

    if (logoDark) {
      css += `
[data-theme="dark"] .heading_icon__${name}::before{
  background: var(${varNameDark})
    no-repeat;
}
`.trimStart();
    }

    css = css + "\n";

    // Add navbar icon

    css += `
.navbar_icon__${name}::before {
  display: inline-flex;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  content: " ";
  background: var(${varName})
    no-repeat;
}
`.trimStart();

    if (logoDark) {
      css += `
[data-theme="dark"] .navbar_icon__${name}::before{
  background: var(${varNameDark})
    no-repeat;
}
`.trimStart();
    }
  });

  if (variables.length) {
    css =
      `:root {
\t${variables.map(({ name, value }) => `${name}: ${value}`).join("\n\t")}
}
` + css;
  }

  return css;
}

function svgToDataUri(filePath: string): string {
  const svgFileString = fs.readFileSync(filePath, "utf-8");
  // Remove any line breaks, tabs, and spaces between tags
  const cleanedSvgContent = svgFileString
    .replace(/[\n\t\r]+/g, "")
    .replace(/>\s+</g, "><");

  // Convert the SVG content to a base64-encoded string
  const base64EncodedSvg = btoa(cleanedSvgContent);

  // Create a CSS data URI
  const dataUri = `data:image/svg+xml;base64,${base64EncodedSvg}`;

  return dataUri;
}

function pngToDataUri(filePath: string): string {
  // Read the file synchronously
  const base64EncodedPng = fs.readFileSync(filePath, "base64");

  // Create a CSS data URI
  const dataUri = `data:image/png;base64,${base64EncodedPng}`;

  return dataUri;
}

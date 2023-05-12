import fs from "fs";
import path from "path";

export async function importFile<T>(file: string): Promise<T> {
  const data = await fs.promises.readFile(file, "utf8");

  if (file.endsWith(".json")) {
    return JSON.parse(data) as T;
  }

  return data as unknown as T;
}

export function capitalizeWords(input: string): string {
  const words = input.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

type NestedObject<T> = T & { children?: NestedObject<T>[] };

interface ObjectWithPermalink {
  permalink: string;
  [key: string]: any;
}

export function nestObjectsByPermalink<T extends ObjectWithPermalink>(
  objects: T[]
): NestedObject<T>[] {
  const rootObjects: NestedObject<T>[] = [];

  const objectMap: Map<string, NestedObject<T>> = new Map();

  for (const object of objects) {
    const parts = object.permalink.split("/");
    let currentObjects = rootObjects;

    for (const part of parts) {
      const permalink =
        currentObjects.length === 0
          ? `/${part}`
          : `${currentObjects[0].permalink}/${part}`;

      let currentObject = objectMap.get(permalink);

      if (!currentObject) {
        currentObject = {
          permalink,
          children: [],
        } as unknown as NestedObject<T>;

        objectMap.set(permalink, currentObject);
        currentObjects.push(currentObject);
      }

      currentObjects = currentObject.children!;
    }

    currentObjects.push(object);
  }

  return rootObjects;
}

export function getComponentPath(componentName: string) {
  return path.join(
    __dirname,
    "components",
    componentName.endsWith(".js") ? componentName : componentName + ".js"
  );
}

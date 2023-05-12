import { LoadedClient, PackageType } from "./types";
import { Package } from "./package";

export class Example extends Package implements LoadedClient {
  type: PackageType = "example";
}

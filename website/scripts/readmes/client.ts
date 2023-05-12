import { LoadedClient, PackageType } from "./types";
import { Package } from "./package";

export class Client extends Package implements LoadedClient {
  type: PackageType = "client";
}

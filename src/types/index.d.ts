import { Subbey } from "./Subbey";
import { Response } from "./Response";
declare module "subbey" {
    export function subbey(options: Subbey): Promise<Response[]>;
}
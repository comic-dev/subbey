import { Subbey } from "./Subbey";
import { Response } from "./Response";
declare module "subbey" {
    export default function subby(options: Subbey): Response;
}
import { Subbey } from "./Subbey";
import { Response } from "./Response";
declare module "subby" {
    export var subby: (options: Subbey) => Response;
}
import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "./studentTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [studentType],
};

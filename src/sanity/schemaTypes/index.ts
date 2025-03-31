import { type SchemaTypeDefinition } from "sanity";
import { postType } from "../types/post";
import { blockContentType } from "../types/block-content";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType],
};

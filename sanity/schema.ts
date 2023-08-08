import { type SchemaTypeDefinition } from "sanity";
import { Project } from "./project";
import { Stack } from "./stack";
import { SocialLink } from "./socialLink";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Project, Stack, SocialLink],
};

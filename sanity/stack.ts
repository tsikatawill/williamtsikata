import { SchemaTypeDefinition } from "sanity";

export const Stack: SchemaTypeDefinition = {
  name: "stack",
  type: "document",
  title: "Stack",
  fields: [
    {
      name: "image",
      title: "Display image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

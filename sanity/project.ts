import { SchemaTypeDefinition } from "sanity";

export const Project: SchemaTypeDefinition = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "image",
      title: "Display image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "code_link",
      title: "Link to code",
      type: "string",
    },
    {
      name: "live_link",
      title: "Link to live demo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "stack" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};

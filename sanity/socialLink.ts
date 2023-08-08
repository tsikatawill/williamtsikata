import { SchemaTypeDefinition } from "sanity";

export const SocialLink: SchemaTypeDefinition = {
  name: "social_link",
  type: "document",
  title: "Social Link",
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
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

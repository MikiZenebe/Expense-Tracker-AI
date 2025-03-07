import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon identifier",
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [{ type: "reference", to: { type: "module" } }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "instructor",
      title: "Instructor",
      type: "reference",
      to: { type: "instructor" },
    }),
  ],
});

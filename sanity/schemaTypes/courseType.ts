import { defineField, defineType } from "sanity";
import {} from 'next'

export const courseType = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (rule) => rule.min(0),
    },
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
      name: "image",
      title: "Course Image",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
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
      to: [{ type: "instructor" }],
    }),
  ],

  // preview: {
  //   select: {
  //     courseTitle: "course.title",
  //     lessonTitle: "lesson.title",
  //     completedAt: "completedAt",
  //     courseImage: "course.image",
  //   },
  //   prepare({ courseTitle, lessonTitle, completedAt, courseImage }) {
  //     return {
  //       title: `${courseTitle || "Course"}: "${lessonTitle || "Lesson"}"`,
  //       subtitle: completedAt ? new Date(completedAt).toLocaleDateString() : "",
  //       media:(
  //         <Image />
  //       )
  //     };
  //   },
  // },
});

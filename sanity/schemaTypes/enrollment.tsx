import { defineField, defineType } from "sanity";
import Image from "next/image";

export const enrollmentType = defineType({
  name: "enrollment",
  title: "Enrollment",
  type: "document",
  fields: [
    defineField({
      name: "student",
      title: "Student",
      type: "reference",
      to: [{ type: "student" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "account",
      title: "Account",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
      description: "The amount paid for the course enrollment in cents",
    }),
    defineField({
      name: "paymentId",
      title: "Payment ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The Stripe payment/checkout session ID",
    }),
    defineField({
      name: "enrolledAt",
      title: "Enrolled At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      courseTitle: "course.title",
      studentFirstName: "student.firstName",
      studentLastName: "student.lastName",
      studentImage: "student.image",
    },
    prepare({ courseTitle, studentFirstName, studentLastName, studentImage }) {
      return {
        title: `${studentFirstName} ${studentLastName}`,
        subtitle: courseTitle,
        media: (
          <Image
            src={studentImage}
            alt={`${studentFirstName} ${studentLastName}`}
            width={100}
            height={100}
          />
        ),
      };
    },
  },
});

import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "./studentTypes";
import { courseType } from "./courseType";
import { moduleType } from "./moduleType";
import { lessonType } from "./lessonType";
import { instructorType } from "./instructorType";
import { blockContent } from "./blockContent";
import { enrollmentType } from "./enrollment";
import { categoryType } from "./categoryType";
import { lessonCompletionType } from "./lessonCompletionType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    courseType,
    moduleType,
    lessonType,
    instructorType,
    blockContent,
    enrollmentType,
    categoryType,
    lessonCompletionType,
  ],
};

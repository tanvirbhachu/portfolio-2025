import { defineField, defineType } from "sanity";
import { Cube } from "@phosphor-icons/react";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: Cube,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) =>
        Rule.required().error("A slug is required for the post URL."),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) =>
        Rule.required().error(
          "A publication date is required for ordering posts."
        ),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        media: null,
      };
    },
  },
  orderings: [
    {
      name: "publishedAtDesc",
      title: "Latest Published",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});

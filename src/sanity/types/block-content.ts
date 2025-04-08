import { defineArrayMember, defineType } from "sanity";
import { CodeBlock, Image as ImageIcon } from "@phosphor-icons/react";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      title: "Separator",
      name: "separator",
      type: "object",
      fields: [
        {
          name: "style",
          title: "Style",
          type: "string",
          options: {
            list: [
              { title: "Line", value: "line" },
              { title: "Space", value: "space" },
            ],
          },
        },
      ],
    }),
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineArrayMember({
      title: "Code Block",
      name: "codeBlock",
      type: "object",
      icon: CodeBlock,
      fields: [
        {
          name: "language",
          title: "Language",
          type: "string",
          options: {
            list: [
              // this must be a valid language for react-syntax-highlighter
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "JSON", value: "json" },
              { title: "HTML", value: "html" },
            ],
          },
        },
        {
          name: "content",
          title: "Content",
          type: "text",
        },
      ],
    }),
  ],
});

export default {
  name: "bookRead",
  title: "Book Read",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule: any) => rule.min(1).max(5).integer(),
    },
    {
      name: "shortTake",
      title: "Short Take",
      type: "text",
      rows: 3,
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
    },
    {
      name: "isCurrentlyReading",
      title: "Currently Reading",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "currentPage",
      title: "Current Page",
      type: "number",
      hidden: ({ document }: { document: any }) => !document?.isCurrentlyReading,
    },
    {
      name: "totalPages",
      title: "Total Pages",
      type: "number",
    },
    {
      name: "linkedBookNote",
      title: "Linked Book Note",
      type: "reference",
      to: [{ type: "bookNote" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "coverImage",
    },
  },
};

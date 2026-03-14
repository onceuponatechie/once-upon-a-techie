export default {
  name: "bookNote",
  title: "Book Note",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "bookRef",
      title: "Book Reference",
      type: "reference",
      to: [{ type: "bookRead" }],
      validation: (rule: any) => rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "dateRead",
      title: "Date Read",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "bookRef.title",
    },
  },
};

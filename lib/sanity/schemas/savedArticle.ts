export default {
  name: "savedArticle",
  title: "Saved Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "source",
      title: "Source",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "source",
    },
  },
};

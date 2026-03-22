import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "733a4868-4ec5-457f-a7e4-3448966c3ca5",
  branch: "main",
  token: "1e171f44055b80eaf10dad618f25a8c99c5ddd31",
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "_posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "Executive Assistant Tips",
              "Calendar Strategy",
              "Operations",
              "Travel",
              "Hiring",
              "Tools",
              "Mindset",
              "Productivity",
            ],
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Short Description",
            ui: { component: "textarea" },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Blog Content",
            isBody: true,
          },
          {
            type: "string",
            name: "seo_description",
            label: "SEO Description",
            ui: { component: "textarea" },
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "_data",
        format: "json",
        match: { include: "homepage" },
        fields: [
          { type: "string", name: "hero_eyebrow", label: "Hero Eyebrow Text" },
          { type: "string", name: "hero_headline", label: "Hero Headline" },
          { type: "string", name: "hero_subtext", label: "Hero Subtext", ui: { component: "textarea" } },
          { type: "string", name: "testimonial_quote", label: "Testimonial Quote", ui: { component: "textarea" } },
          { type: "string", name: "testimonial_attr", label: "Testimonial Attribution" },
        ],
      },
      {
        name: "about",
        label: "About Page",
        path: "_data",
        format: "json",
        match: { include: "about" },
        fields: [
          { type: "string", name: "role", label: "Your Role" },
          { type: "string", name: "availability", label: "Availability Status" },
          { type: "string", name: "bio_1", label: "Bio Paragraph 1", ui: { component: "textarea" } },
          { type: "string", name: "bio_2", label: "Bio Paragraph 2", ui: { component: "textarea" } },
          { type: "string", name: "bio_3", label: "Bio Paragraph 3", ui: { component: "textarea" } },
          { type: "image", name: "photo", label: "Profile Photo" },
        ],
      },
      {
        name: "contact",
        label: "Contact Details",
        path: "_data",
        format: "json",
        match: { include: "contact" },
        fields: [
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "linkedin", label: "LinkedIn URL" },
          { type: "string", name: "response_time", label: "Response Time" },
          { type: "string", name: "availability_message", label: "Availability Message", ui: { component: "textarea" } },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "_data",
        format: "json",
        match: { include: "settings" },
        fields: [
          { type: "string", name: "business_name", label: "Business Name" },
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "copyright", label: "Copyright Text" },
        ],
      },
    ],
  },
});

# Visuals Directory

This directory is for carousel images for the AI Rule Creation project.

Please drop your 3 visual images here:
- Image 1: (e.g., visual-1.jpg or visual-1.png)
- Image 2: (e.g., visual-2.jpg or visual-2.png)
- Image 3: (e.g., visual-3.jpg or visual-3.png)

Once you add the images, update the `visuals` array in `/src/data/projects.ts` to reference the correct file paths:

```typescript
visuals: [
  { type: "wireframes", title: "Key Wireframes", url: "/images/visuals/visual-1.jpg" },
  { type: "ui", title: "Final UI - Rule Creation", url: "/images/visuals/visual-2.jpg" },
  { type: "ui", title: "Testing and Management Features", url: "/images/visuals/visual-3.jpg" }
]
```
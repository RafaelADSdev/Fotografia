import type { ImageMetadata } from 'astro';

const categories = [
  { slug: 'natal', label: 'Natal', featured: true },
  { slug: 'dia-das-maes', label: 'Dia das Mães', featured: true },
  { slug: 'acompanhamento-mensal', label: 'Acompanhamento Mensal', featured: true },
  { slug: 'gestante', label: 'Gestante', featured: false },
  { slug: 'newborn', label: 'Newborn', featured: false },
  { slug: 'infantil', label: 'Infantil', featured: false },
  { slug: 'aniversario', label: 'Aniversário', featured: false },
  { slug: 'smash-the-cake', label: 'Smash the Cake', featured: false },
];

const sources = import.meta.glob<ImageMetadata>('../assets/ensaios/*/*.webp', {
  eager: true,
  import: 'default',
});

export const albums = categories.map((category) => ({
  ...category,
  photos: Object.entries(sources)
    .filter(([path]) => path.startsWith(`../assets/ensaios/${category.slug}/`))
    .sort(([first], [second]) => first.localeCompare(second, 'pt-BR', { numeric: true }))
    .map(([, image]) => image),
})).filter(({ photos }) => photos.length > 0);

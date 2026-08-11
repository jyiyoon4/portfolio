const imagePath = (id) => `/images/projects/${id}/${id}-thumbnail.jpg`;

const projects = [
  {
    id: 'project-01',
    number: '01',
    title: 'PROJECT 01',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description: 'A product design project exploring form, usability, and material expression.',
    thumbnail: imagePath('project-01'),
    background: 'A study of form and function developed through iterative product design.',
    process: 'Research, sketching, form development, prototyping, and visual refinement.',
    outcome: 'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'PROJECT 02',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description: 'An exploration of structure, interaction, and visual hierarchy.',
    thumbnail: imagePath('project-02'),
    background: 'A design exercise focused on turning constraints into a coherent visual system.',
    process: 'Concept development, information organization, visual testing, and refinement.',
    outcome: 'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'PROJECT 03',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description: 'An editorial project built around rhythm, typography, and information hierarchy.',
    thumbnail: imagePath('project-03'),
    background: 'An exploration of editorial composition and structured information.',
    process: 'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },
];

export default projects;

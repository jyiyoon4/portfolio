const imagePath = (id) => `/images/projects/${id}/${id}-thumbnail.jpg`;

const rawProjects = [
  {
    id: 'from-extra-to-main',
    title: 'FROM EXTRA TO MAIN',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description: 'from Extra to Main',
    background:
      'A study of form and function developed through iterative product design.',
    process:
      'Research, sketching, form development, prototyping, and visual refinement.',
    outcome:
      'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-02',
    title: 'PROJECT 02',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'An exploration of structure, interaction, and visual hierarchy.',
    background:
      'A design exercise focused on turning constraints into a coherent visual system.',
    process:
      'Concept development, information organization, visual testing, and refinement.',
    outcome:
      'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-03',
    title: 'PROJECT 03',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description:
      'An editorial project built around rhythm, typography, and information hierarchy.',
    background:
      'An exploration of editorial composition and structured information.',
    process:
      'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },

  {
    id: 'project-0100',
    title: 'PROJECT 0100',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'A product design project exploring form, usability, and material expression.',
    background:
      'A study of form and function developed through iterative product design.',
    process:
      'Research, sketching, form development, prototyping, and visual refinement.',
    outcome:
      'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-0200',
    title: 'PROJECT 020',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'An exploration of structure, interaction, and visual hierarchy.',
    background:
      'A design exercise focused on turning constraints into a coherent visual system.',
    process:
      'Concept development, information organization, visual testing, and refinement.',
    outcome:
      'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-0300',
    title: 'PROJECT 030',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description:
      'An editorial project built around rhythm, typography, and information hierarchy.',
    background:
      'An exploration of editorial composition and structured information.',
    process:
      'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },

  {
    id: 'project-010',
    title: 'PROJECT 010',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'A product design project exploring form, usability, and material expression.',
    background:
      'A study of form and function developed through iterative product design.',
    process:
      'Research, sketching, form development, prototyping, and visual refinement.',
    outcome:
      'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-020',
    title: 'PROJECT 02',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'An exploration of structure, interaction, and visual hierarchy.',
    background:
      'A design exercise focused on turning constraints into a coherent visual system.',
    process:
      'Concept development, information organization, visual testing, and refinement.',
    outcome:
      'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-030',
    title: 'PROJECT 03',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description:
      'An editorial project built around rhythm, typography, and information hierarchy.',
    background:
      'An exploration of editorial composition and structured information.',
    process:
      'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },

  {
    id: 'project-011',
    title: 'PROJECT 01',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'A product design project exploring form, usability, and material expression.',
    background:
      'A study of form and function developed through iterative product design.',
    process:
      'Research, sketching, form development, prototyping, and visual refinement.',
    outcome:
      'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-012',
    title: 'PROJECT 02',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'An exploration of structure, interaction, and visual hierarchy.',
    background:
      'A design exercise focused on turning constraints into a coherent visual system.',
    process:
      'Concept development, information organization, visual testing, and refinement.',
    outcome:
      'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-013',
    title: 'PROJECT 03',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description:
      'An editorial project built around rhythm, typography, and information hierarchy.',
    background:
      'An exploration of editorial composition and structured information.',
    process:
      'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },

  {
    id: 'project-01100',
    title: 'PROJECT 0100',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'A product design project exploring form, usability, and material expression.',
    background:
      'A study of form and function developed through iterative product design.',
    process:
      'Research, sketching, form development, prototyping, and visual refinement.',
    outcome:
      'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-01200',
    title: 'PROJECT 020',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'An exploration of structure, interaction, and visual hierarchy.',
    background:
      'A design exercise focused on turning constraints into a coherent visual system.',
    process:
      'Concept development, information organization, visual testing, and refinement.',
    outcome:
      'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-01300',
    title: 'PROJECT 030',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description:
      'An editorial project built around rhythm, typography, and information hierarchy.',
    background:
      'An exploration of editorial composition and structured information.',
    process:
      'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },

  {
    id: 'project-0110',
    title: 'PROJECT 010',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'A product design project exploring form, usability, and material expression.',
    background:
      'A study of form and function developed through iterative product design.',
    process:
      'Research, sketching, form development, prototyping, and visual refinement.',
    outcome:
      'A resolved product concept with a clear visual and functional direction.',
  },
  {
    id: 'project-0120',
    title: 'PROJECT 02',
    category: 'product',
    year: '2026',
    role: 'Designer',
    description:
      'An exploration of structure, interaction, and visual hierarchy.',
    background:
      'A design exercise focused on turning constraints into a coherent visual system.',
    process:
      'Concept development, information organization, visual testing, and refinement.',
    outcome:
      'A concise design system that connects physical and visual elements.',
  },
  {
    id: 'project-0130',
    title: 'PROJECT 03',
    category: 'editorial',
    year: '2026',
    role: 'Designer',
    description:
      'An editorial project built around rhythm, typography, and information hierarchy.',
    background:
      'An exploration of editorial composition and structured information.',
    process:
      'Content structure, typographic studies, layout iterations, and production.',
    outcome: 'A restrained editorial system with a strong browsing rhythm.',
  },
];

// thumbnail 계산 + number 자동 부여를 한 번의 map으로 처리.
const projects = rawProjects.map((project, index) => ({
  ...project,
  thumbnail: imagePath(project.id),
  number: String(index + 1).padStart(2, '0'),
}));

export default projects;

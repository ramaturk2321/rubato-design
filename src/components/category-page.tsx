import { ProjectGrid } from "@/components/project-grid";
import { BackToTop } from "@/components/back-to-top";
import { getProjectsByCategory, Category } from "@/data/projects";

interface CategoryPageProps {
  category: Category;
}

export function CategoryPage({ category }: CategoryPageProps) {
  const projects = getProjectsByCategory(category);

  return (
    <>
      <ProjectGrid projects={projects} />
      <footer className="py-6 text-center text-sm text-brand-dark/60">
        &copy; Rubato Design
      </footer>
      <BackToTop />
    </>
  );
}

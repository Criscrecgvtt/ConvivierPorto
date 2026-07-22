import { ImageStory } from '@/components/editorial/ImageStory';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { buildingHistory, officialPages } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Palacete Burmester', 'Building history of Palacete Burmester as part of Casa dos Livros.', '/about/palacete-burmester');

export default function BuildingPage() {
  return (
    <main className="pt-20">
      <ImageStory image={siteImages.houseHall} alt={imageAlt.houseHall} label="Building history" title={buildingHistory.title}>
        <StatusBadge status="Casa dos Livros" />
        <p className="mt-5">{buildingHistory.summary}</p>
        <p className="mt-4">{buildingHistory.note}</p>
        <a className="btn-secondary mt-7" href="/explore-the-house">Explore the House</a>
      </ImageStory>
    </main>
  );
}

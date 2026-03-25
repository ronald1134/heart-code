import { createContext, useContext } from 'react';

// ✅ IMPORTA AS IMAGENS
import couple7 from '../assets/images/couple7.jpeg';
import couple2 from '../assets/images/couple2.jpg';
import couple3 from '../assets/images/couple3.jpg';
import couple4 from '../assets/images/couple4.png';

type ImageType = {
  id: number;
  src: string;
};

const images: ImageType[] = [
  { id: 1, src: couple7 },
  { id: 2, src: couple2 },
  { id: 3, src: couple3 },
  { id: 4, src: couple4 },
];

const GalleryContext = createContext<ImageType[]>([]);

export const GalleryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GalleryContext.Provider value={images}>
      {children}
    </GalleryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGallery = () => useContext(GalleryContext);
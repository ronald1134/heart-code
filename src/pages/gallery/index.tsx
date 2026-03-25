import { useGallery } from "../../contexts/GalleryContext";
import { Container, Grid, ImageCard, Hearts } from "./style";


export function Gallery() {
  const images = useGallery();

  return (
    <Container>
      <Hearts />
    <p>agua</p>
      <h1>Nosso universo ❤️</h1>

      <Grid>
        {images.map((img: { id: unknown; src: string | undefined }) => (
          <ImageCard key={img.id as string | number}>
            <img src={img.src} alt="" />
          </ImageCard>
        ))}
      </Grid>
    </Container>
  );
}

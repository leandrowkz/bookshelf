import { Carousel, CarouselProps } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useStyles } from "./BookCarousel.styles";

export type BookCarouselProps = CarouselProps & {
  books: any[]
}

export function BookCarousel({ books, ...props }: BookCarouselProps) {
  const { classes } = useStyles()

  return (
    <Carousel {...props} slideSize="200px" slideGap="lg" align="start" controlSize={40} className={classes.carousel}>
      {books.map((book) => (
        <Carousel.Slide key={`book-${book.ISBN}`}>
          <Image src={book.image} radius="md" fit="cover" withPlaceholder height={300} width={200} />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

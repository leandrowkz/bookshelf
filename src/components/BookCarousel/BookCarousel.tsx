import { Carousel, CarouselProps } from "@mantine/carousel";
import { Box, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./BookCarousel.styles";
import { useMediaQuery } from "@mantine/hooks";

export type BookCarouselProps = CarouselProps & {
  books: any[]
}

export function BookCarousel({ books, ...props }: BookCarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Carousel
        {...props}
        slideSize="15%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="lg"
        align="start"
        slidesToScroll={mobile ? 1 : undefined}
        controlSize={40}
        className={classes.carousel}
      >
        {books.map((book) => (
          <Carousel.Slide key={`book-${book.ISBN}`}>
            <Image src={book.image} radius="md" fit="cover" withPlaceholder width="100%" className={classes.cover} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

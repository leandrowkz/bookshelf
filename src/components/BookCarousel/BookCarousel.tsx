import { Carousel, type CarouselProps } from '@mantine/carousel'
import { Box, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import type { Book } from '@/types/Book'
import { BookItem } from '../BookItem/BookItem'
import classes from './BookCarousel.module.css'

export type BookCarouselProps = CarouselProps & {
  books: Book[]
}

export function BookCarousel({ books, ...props }: BookCarouselProps) {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  return (
    <Box className={classes.wrapper}>
      <Carousel
        {...props}
        slideSize={{ base: '33%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: 'md' }}
        align="start"
        slidesToScroll={mobile ? 1 : undefined}
        controlSize={40}
        className={classes.carousel}
      >
        {books.map((book) => (
          <Carousel.Slide key={`book-${book.id}`}>
            <BookItem book={book} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

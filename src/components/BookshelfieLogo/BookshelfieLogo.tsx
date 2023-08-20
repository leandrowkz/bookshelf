import { Title } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./BookshelfieLogo.styles";

export function BookshelfieLogo() {
  const { classes } = useStyles()

  return (
    <Link href="/" className={classes.link}>
      <Title order={1}>📓 bookshelfie</Title>
    </Link>
  )
}

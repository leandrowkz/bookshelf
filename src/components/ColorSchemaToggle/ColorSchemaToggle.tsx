import { ActionIcon, type ActionIconProps, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'

export function ColorSchemeToggle({ ...props }: ActionIconProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      {...props}
      onClick={() => toggleColorScheme()}
      variant="default"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[6],
      })}
    >
      {colorScheme === 'dark' ? <IconSun stroke={1.5} /> : <IconMoonStars stroke={1.5} />}
    </ActionIcon>
  )
}

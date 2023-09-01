import { Layout } from '@/components'
import { Grid } from '@mantine/core'
import { CollectionsSection } from './CollectionsSection'
import { DiscoverBooksSection } from './DiscoverBooksSection'
import { ChallengesSection } from './ChallengesSection'

export default function Dashboard() {
  return (
    <Layout>
      <Grid>
        <Grid.Col span={4}>
          <ChallengesSection />
        </Grid.Col>
      </Grid>
      <CollectionsSection />
      <DiscoverBooksSection />
    </Layout>
  )
}

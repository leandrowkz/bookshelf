import { Layout } from '@/components'
import { Grid } from '@mantine/core'
import { CollectionsSection } from '@/components/collections/CollectionsSection'
import { DiscoverBooksSection } from '@/components/collections/DiscoverBooksSection'
import { ChallengesSection } from '@/components/collections/ChallengesSection'

export default function CollectionsPage() {
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

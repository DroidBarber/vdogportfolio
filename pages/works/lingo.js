import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Lingo">
    <Container>
      <Title>
        Lingo <Badge>2024</Badge>
      </Title>
      <P>
        Lingo is an interactive language learning platform where users can pick a course, dive into a lesson and interact with questions using AI-generated voices, it comes with a dynamic heart system to keep learners engaged and motivated. Additionally, Lingo offers a shop system where users can exchange points for hearts, Leaderboards, Quests and challenges. The platform is available in both free and pro tiers, with the latter offering unlimited hearts for uninterrupted learning.
        <UnorderedList my={4}>
          <ListItem>Duolingo style progress 🐦</ListItem>
          <ListItem>AI Voices with ElevenLabs 🗣</ListItem>
          <ListItem>characters with KenneyNL 🤖</ListItem>
          <ListItem>Sound effects 🔊</ListItem>
          <ListItem>Hearts system ❤️</ListItem>
          <ListItem>Points/XP system 🌟</ListItem>
          <ListItem>Shop system 🛒</ListItem>
          <ListItem>Leaderboard 🏆</ListItem>
          <ListItem>Quests milestones 🎖️</ListItem>
          <ListItem>Pro tier for unlimited hearts 💳</ListItem>
          <ListItem>Admin dashboard 🛡️</ListItem>
          <ListItem>Drizzle ORM 🌧</ListItem>
          <ListItem>NeonDB Real-time 💾</ListItem>
          <ListItem>Clerk Auth 🔐</ListItem>
        </UnorderedList>
      </P>
      <List ml={4} my={4}>
        <ListItem>
        <Meta>Website</Meta>
          <Link href="https://lingo-delta.vercel.app/" target='_blank'>
            Lingo <ExternalLinkIcon mx="2"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
            <Link href="https://github.com/DroidBarber/lingo" target="_blank">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS 14, Typescript, TailwindCSS, Clerk, NeonDB, shadcn-ui, Drizzle ORM, React-Admin, Stripe </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/lingoa.png" alt="lingo"/>
      <WorkImage src="/images/works/lingob.png" alt="lingo"/>
      <WorkImage src="/images/works/lingoc.png" alt="lingo"/>
      <WorkImage src="/images/works/lingod.png" alt="lingo"/>
      <WorkImage src="/images/works/lingoh.png" alt="lingo"/>
      <WorkImage src="/images/works/lingoj.png" alt="lingo"/>
      <WorkImage src="/images/works/lingoe.png" alt="lingo"/>
      <WorkImage src="/images/works/lingox.png" alt="lingo"/>
      <WorkImage src="/images/works/lingof.png" alt="lingo"/>
      <WorkImage src="/images/works/lingoz.png" alt="lingo"/>
      <WorkImage src="/images/works/lingog.png" alt="lingo"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
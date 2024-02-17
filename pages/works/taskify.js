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
  <Layout title="Taskify">
    <Container>
      <Title>
        Taskify <Badge>2024</Badge>
      </Title>
      <P>
        Taskefy is a versatile project management web application built to help teams organize tasks, streamline workflows. With customizable boards, cards, and lists, Taskefy adapts to unique project needs, with both a free and a paid premium options offering unlimited boards.
        <UnorderedList my={4}>
          <ListItem>Trello-style interface 🖥️</ListItem>
          <ListItem>Organizations / Workspaces 🗃️</ListItem>
          <ListItem>Customizable boards 📂</ListItem>
          <ListItem>Card & List actions ✍️</ListItem>
          <ListItem>Drag-and-drop Cards & Lists 🎯</ListItem>
          <ListItem>Activity logs, notifications 📋</ListItem>
          <ListItem>Unsplash API for cover images 🌆</ListItem>
          <ListItem>Clerk Authentication 🔐</ListItem>
          <ListItem>Neon Real-time database 🔗</ListItem>
          <ListItem>Prisma ORM 💎</ListItem>
          <ListItem>Stripe Subscriptions 💳</ListItem>
        </UnorderedList>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://taskify-eight-kappa.vercel.app/" target="_blank">
            Taskefy <ExternalLinkIcon mx="2"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/DroidBarber/taskify" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS 14, Typescript, TailwindCSS, shadcn-ui, Clerk, Prisma, Neon DB, Stripe</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/taskify1.png" alt="taskify"/>
      <WorkImage src="/images/works/taskify4.png" alt="taskify"/>
      <WorkImage src="/images/works/taskify2.png" alt="taskify"/>
      <WorkImage src="/images/works/taskify3.png" alt="taskify"/>
      <WorkImage src="/images/works/taskify5.png" alt="taskify"/>
      <WorkImage src="/images/works/taskify6.png" alt="taskify"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
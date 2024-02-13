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
  <Layout title="Jotion">
    <Container>
      <Title>
        Jotion <Badge>2024</Badge>
      </Title>
      <P>
        This project aims to build a fully connected productivity-focused workspace solution for document management and note-taking, facilitating seamless organization and collaboration with all the essential features such as renaming in real time, adding icons, adding and replacing banner images, archiving and deleting forever and finally publishing the documents via link share.
        <UnorderedList my={4}>
          <ListItem>Notion-style editor 📝</ListItem>
          <ListItem>Light and Dark mode 🌓</ListItem>
          <ListItem>Keyboard Commands ⌨️</ListItem>
          <ListItem>Infinite children documents 🌲</ListItem>
          <ListItem>Clerk Authentication 🔐</ListItem>
          <ListItem>Convex Real-time database 🔗</ListItem>
          <ListItem>EdgeStore Upload 💾</ListItem>
        </UnorderedList>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jotion-hazel.vercel.app/" target='_blank'>
            Jotion <ExternalLinkIcon mx="2"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS 13.5, Typescript, TailwindCSS, BlockNoteJS, Clerk, Convex, EdgeStore, shadcn-ui, </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/jotion1.png" alt="jotion"/>
      <WorkImage src="/images/works/jotion2.png" alt="jotion"/>
      <WorkImage src="/images/works/jotion3.png" alt="jotion"/>
      <WorkImage src="/images/works/jotion4.png" alt="jotion"/>
      <WorkImage src="/images/works/jotion5.png" alt="jotion"/>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
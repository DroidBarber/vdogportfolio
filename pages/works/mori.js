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
        Mori <Badge>2024</Badge>
      </Title>
      <P>
        Miro is a dynamic visual workspace designed for brainstorming, project planning, and collaborative ideation utilizing a real-time whiteboard format. Miro is packed with features, allowing users to create boards within their organization and seamlessly invite other members to join in the creative process. 
        <UnorderedList my={4}>
            <ListItem>Miro-style whiteboard ⬜</ListItem>
            <ListItem>Text, Shapes, Notes & Pencil Toolbar 🧰</ListItem>
            <ListItem>Layering functionality 🗃️</ListItem>
            <ListItem>Coloring system 🎨</ListItem>
            <ListItem>Undo & Redo ↩️</ListItem>
            <ListItem>Real-time collaboration 🤝</ListItem>
            <ListItem>Favoriting functionality ⭐️</ListItem>
            <ListItem>Keyboard shortcuts ⌨️</ListItem>
            <ListItem>Auth, organisations and invites 🔐</ListItem>
            <ListItem>Convex database 💾</ListItem>
          </UnorderedList>
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://mori-xi.vercel.app/" target='_blank'>
              Mori <ExternalLinkIcon mx="2"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github Link</Meta>
            <Link href="https://github.com/DroidBarber/mori" target="_blank">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS 14, Typescript, TailwindCSS, LiveBlocks, Clerk, Convex, perfect-freehand, shadcn-ui, </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mori2.png" alt="mori"/>
      <WorkImage src="/images/works/mori1.png" alt="mori"/>
      <WorkImage src="/images/works/mori3.png" alt="mori"/>
      <WorkImage src="/images/works/mori4.png" alt="mori"/>
      <WorkImage src="/images/works/mori5.png" alt="mori"/>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
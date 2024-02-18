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
  <Layout title="FigPro">
    <Container>
      <Title>
        FigPro <Badge>2024</Badge>
      </Title>
      <P>
        FigPro is an intuitive interface design tool, focused on collaboration and creativity to help people create, test and prototype designs for websites, mobile apps, and other digital products with complete  features such as real time collaboration between users, drawing tools(Layers and Groups), interactive componens(editing and styling), reactions and Customization.
        <UnorderedList my={4}>
          <ListItem>Freeform Drawing ✍️</ListItem>
          <ListItem>Multi Cursors, Cursor Chat, and Reactions 🖱️</ListItem>
          <ListItem>Comment Bubbles 💬</ListItem>
          <ListItem>Layers and groups 🌫️</ListItem>
          <ListItem>Uploading Images 📤</ListItem>
          <ListItem>Keyboard Shortcuts ⌨️</ListItem>
          <ListItem>Undo/Redo ↩️</ListItem>
          <ListItem>Deleting, Scaling, Moving, Clearing, Exporting Canvas 🎨</ListItem>
        </UnorderedList>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://figpro-lovat.vercel.app/" target='_blank'>
            FigPro
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/DroidBarber/figpro" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS 14, Typescript, TailwindCSS, FabricJS, LiveBlocks, shadcn-ui, </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/figpro1.png" alt="figpro"/>
      <WorkImage src="/images/works/figpro2.png" alt="figpro"/>
      <WorkImage src="/images/works/figpro3.png" alt="figpro"/>
      <WorkImage src="/images/works/figpro4.png" alt="figpro"/>
      <WorkImage src="/images/works/figpro5.png" alt="figpro"/>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
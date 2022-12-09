import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="aigen">
    <Container>
      <Title>
        AI Image Generator <Badge>2022</Badge>
      </Title>
      <P>
        an AI Image Generator made with NodeJS based on the OpenAI DALL-E model that generates images from scratch based on the entered text and the selected size.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/DroidBarber/AI-Image-Generator" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>OpenAI API, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/aigen1.png" alt="aigen" />
      <WorkImage src="/images/works/aigen2.png" alt="aigen" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
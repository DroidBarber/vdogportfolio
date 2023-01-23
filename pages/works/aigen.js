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
        DALL-EE Image Generator <Badge>2022</Badge>
      </Title>
      <P>
        AI Image Generation tools such as MidJourney or DALL-E have taken over social media by creating a wide range of images from memes and art to full ui/ux designs, this technology has the potential to revolutionize industries, in this project we build a fullstack MERN Image generator app with modern and minimal design, dynamic image layout, search function and the ability to create AI generated images by clicking the suprise me button or entering any prompt and finally sharing your creations with the community.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dall-ee.vercel.app/" target="_blank">
            DALL-EE  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/DroidBarber/AI-Image-Generator" target="_blank">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Express, MongoDB, NodeJS, Cloudinary, OpenAI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/aigen1.png" alt="aigen" />
      <WorkImage src="/images/works/aigen2.png" alt="aigen" />
      <WorkImage src="/images/works/aigen3.png" alt="aigen" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
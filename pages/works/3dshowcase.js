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
  <Layout title="3dshow">
    <Container>
      <Title>
        3D Showcase <Badge>2023</Badge>
      </Title>
      <P>
        Many large corporations already use 3D graphics to showcase their products, in this project we use ReactJS to build and deploy a Web Application using ThreeJS with React Three Fiber which is a React renderer for ThreeJS and Framer-Motion, a popular animation library for react, that you can use to load, create and customize stunning 3D models, the example used in the demo is a Shirt model that comes with custom coloring, image upload support and finally the possibility to prompt OpenAI famous Image generation Engine DALL-E and display the results on the model.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://3d-showcase-five.vercel.app/" target="_blank">
            3D-showcase <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/DroidBarber/3d-showcase" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, ThreeJS, Framer-Motion, TailwindCSS, React-Three-Fiber, OpenAI API, ViteJS, Vercel</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/3dshow1.png" alt="3dshow"/>
      <WorkImage src="/images/works/3dshow2.png" alt="3dshow"/>
      <WorkImage src="/images/works/3dshow3.png" alt="3dshow"/>
      <WorkImage src="/images/works/3dshow4.png" alt="3dshow"/>
      <WorkImage src="/images/works/3dshow5.png" alt="3dshow"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
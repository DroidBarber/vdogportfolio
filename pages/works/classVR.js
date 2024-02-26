import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="classVR">
    <Container>
      <Title>
        classVR <Badge>2020-2021</Badge>
      </Title>
      <P>
      Virtual reality project developped on the Oculus Quest for the purpose of creating a fully functional class in VR with features such as an fully interactive Whiteboard, complete hand tracking and full Multiplayer experience thanks to the Photon Engine developed with Unity Engine in partnership with the Center for Research and Virtual Health Simulation at the University of Limoges.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/DroidBarber/ProjetCoursVirtuel" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Oculus Quest/HTC Vive/HP Reverb</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Unity v2021.1, Photon Engine</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/classvr2.png" alt="classvr" />
      <WorkImage src="/images/works/classvr.png" alt="classvr" />
      <WorkImage src="/images/works/classvr3.png" alt="classvr" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/classvr4.mp4"
          title="Handtracking Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
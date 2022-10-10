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
  <Layout title="covid19">
    <Container>
      <Title>
        Covid 19 Tracker <Badge>2020</Badge>
      </Title>
      <P>
        Simple Covid Stats tracking web app made with only Vue.js & Tailwind powered by covid19api.com
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://stonebraker-2debbf.netlify.app/" target="_blank">
            www.covid19-tracker.com <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>VueJS, TailwindCSS, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/covid1.png" alt="covid" />
      <WorkImage src="/images/works/covid2.png" alt="covid" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
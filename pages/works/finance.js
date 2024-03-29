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
  <Layout title="finance">
    <Container>
      <Title>
        Financeer <Badge>2023</Badge>
      </Title>
      <P>
        Financeer is a complete finance dashboard application that consists of multiple charts and tables that businesses can use to display and visualize key performance indicators to keep tracks of their profits and expenses, and with the magic of machine learning and linear regression make predictions on their revenue for the future
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://financeer.vercel.app/" target="_blank">
            Financeer <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/DroidBarber/financeer" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, NodeJS, express, Typescript, MongoDB, regression-js, MUI, MUI-data-grid, Redux-Toolkit, ViteJS, fly.io</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/financeer2.png" alt="finance"/>
      <WorkImage src="/images/works/financeer1.png" alt="finance"/>
      <WorkImage src="/images/works/financeer3.png" alt="finance"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
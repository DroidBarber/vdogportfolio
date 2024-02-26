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
  <Layout title="proomptz">
    <Container>
      <Title>
        Proomptz <Badge>2023</Badge>
      </Title>
      <P>
        Proomptz is a an open-source AI prompting tool that employs the latest version of NextJS 13.4, enabling it to leverage the most cutting-edge features of this technology such as the /App folder structure, Server Components and Serverless Route Handlers, where we can create and share creative prompts to a community, complete with Search feature through tags and usernames, Next Authentication and the option to edit or delete prompts.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://proomptz.vercel.app/" target="_blank">
            Proomptz <ExternalLinkIcon mx="2"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href='https://github.com/DroidBarber/proomptz' target="_blank">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.JS 13.4, Typescript, TailwindCSS, MongoDB, NextAuth</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/proomptz2.png" alt="proomptz"/>
      <WorkImage src="/images/works/proomptz4.png" alt="proomptz"/>
      <WorkImage src="/images/works/proomptz3.png" alt="proomptz"/>
      <WorkImage src="/images/works/proomptz5.png" alt="proomptz"/>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
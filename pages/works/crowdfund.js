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
  <Layout title="crwdfund">
    <Container>
      <Title>
        CrowdFunder <Badge>2022</Badge>
      </Title>
      <P>
        a Online Crowdfunding platform connected to the Eth blockchain, with metamask pairing and smart contracts interaction that you can use to easily create, view, and donate to crowdfunding campaigns directly through the blockchain
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://silver-fairy-303bde.netlify.app/" target="_blank">
            CrowdFunder <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/DroidBarber/CrowdFunder" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, TailwindCSS, Thirdweb, solidity, hardhat</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/crowdfund1.png" alt="crowdfund"/>
      <WorkImage src="/images/works/crowdfund2.png" alt="crowdfund"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
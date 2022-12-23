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
  <Layout title="krypt">
    <Container>
      <Title>
        Krypt Platform <Badge>2021</Badge>
      </Title>
      <P>
      Web 3.0 has the potential to change the internet as we know it, forever.
      In this project, we aimed to :<br/>

      •Connect a regular Web application to the blockchain and pair it to an Ethereum wallet using MetaMask.<br/>
      •Write Smart Contracts on the Ethereum network using the Solidity programming language.<br/>
      •Essentially, to create a full-fledged Web 3.0 application that allows users to send transactions through the blockchain.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://elated-khorana-f4ec46.netlify.app/" target="_blank">
            krypt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, TailwindCSS, Node.js, Solidity, chai, ethers.js, hardhat</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/krypt1.png" alt="krypt" />
    </Container>
  </Layout>
)


export default Work
export { getServerSideProps } from '../../components/chakra'
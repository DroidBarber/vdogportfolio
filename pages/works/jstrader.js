import {
  Container,
  Badge,
  Link,
  List,
  Heading,
  Center,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="jstrader">
    <Container>
      <Title>
        JS Trader <Badge>2022</Badge>
      </Title>
      <P>
      A scheduled Firebase Cloud Function that uses OpenAIs GPT-3 model to predict the stock picks of Jim Cramer, then makes trades with Alpaca API.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/DroidBarber/javascript-stock-trader">
            Github Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>PLatform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Firebase Functions, Node.JS, Alpaca API, GPT-3</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>🔗 Ressources</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="openai.com">
            <Badge mr={2}>OpenAI GPT-3</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://alpaca.markets/">
            <Badge mr={2}>Alpaca Trading API</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.investopedia.com/articles/active-trading/101014/basics-algorithmic-trading-concepts-and-examples.asp">
            <Badge mr={2}>Algo Trading Explained</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/jstrader.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
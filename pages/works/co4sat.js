import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
    UnorderedList
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'

  const Work = () => (
    <Layout title="co4sat">
        <Container>
            <Title>
                Co4sat <Badge>2021</Badge>
            </Title>
            <P>
                Development and implementation of a system for monitoring trains, triggering and managing alerts in the event of a dangerous situation for SNCF train conductors.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/DroidBarber/Co4Sat">
                    github.com/DroidBarber/Co4Sat <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web/Android/iOS</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Vue.js, Node.ts, MongoDB, Microsoft Azure Cloud</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
              <Center>Media coverage</Center>
            </Heading>

            <UnorderedList my={4}>
               <ListItem>
                  <Link href="https://www.railjournal.com/regions/europe/   sncf-launches-iot-based-train-and-track-remote-monitoring/">
                     <Badge mr={2}>railjournal</Badge>
                     SNCF launches IoT-based train and track remote monitoring
                     <ExternalLinkIcon mx="2px" />
                 </Link>
             </ListItem>
            </UnorderedList>

            <WorkImage src="/images/works/train.jpg" alt="train" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
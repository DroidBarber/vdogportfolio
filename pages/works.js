import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOculus from '../public/images/works/oculus.jpg'
import thumbKrypt from '../public/images/works/krypt.jpg'
import thumbCvid from '../public/images/works/cvid.jpg'
import thumbCo4sat from '../public/images/works/trains.jpg'
import thumbKom from '../public/images/works/kom.png'

const Works = () => (
  <Layout title="Works">
      <Container>
           <Heading as="h3" fontSize={20} mb={4}>
              Works
           </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
               <Section>
                   <WorkGridItem id="classVR" title="classVR" thumbnail={thumbOculus}>
                   VR project for the Oculus Quest developed in partnership with the Research Center for Virtual Health Simulation
                   </WorkGridItem>
               </Section>
               <Section>
                   <WorkGridItem
                     id="krypt"
                     title="Krypt"
                     thumbnail={thumbKrypt}
                   >
                      Blockchain Web 3.0 App built with metamask pairing and a smart contract written with solidity on the Ethereum   network
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem
                     id="covid19"
                     title="covid-tracker"
                     thumbnail={thumbCvid}
                   >
                      Simple Covid Tracker App built with Vue.js & Tailwind powered by https://covid19api.com
                   </WorkGridItem>
                    </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="co4sat" thumbnail={thumbCo4sat} title="Co4sat">
                      Development and implementation of a system for monitoring trains, triggering and managing alerts in the event of   a danger situation for SNCF train drivers.
                  </WorkGridItem>
              </Section>
           </SimpleGrid>


           <Section delay={0.2}>
             <Divider my={6} />

            <Heading as="h3" fontSize={20} mb={4}>
              Collaborations
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section delay={0.3}>
                  <WorkGridItem id="kom" thumbnail={thumbKom} title="Kind of Magic">
                  A Magic the Gathering application for creating and managing decks with different formats in a easy and fluid way. where you make an inventory of a collection for players and developers.
                  </WorkGridItem>
              </Section>
          </SimpleGrid>
      </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

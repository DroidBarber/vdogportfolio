import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOculus from '../public/images/works/oculus.jpg'
import thumbKrypt from '../public/images/works/krypt.jpg'
import thumbCvid from '../public/images/works/cvid.jpg'
import thumbCrwd from '../public/images/works/crowdfund.png'
import thumbKom from '../public/images/works/magic.png'
import thumbFindx from '../public/images/works/findx.png'
import thumbJStrader from '../public/images/works/jstrader.png'
import thumbAiGen from '../public/images/works/genai.png'
import thumbFin from '../public/images/works/financeer.png'
import thumb3d from '../public/images/works/3dshowr.png'
// import thumbtwtr from '../public/images/works/btrtwtr.png'


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
                  <WorkGridItem id="findx" thumbnail={thumbFindx} title="FindX">
                    Search engine app built with React.JS and TailwindCSS
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="jstrader" thumbnail={thumbJStrader} title="Trade Stocks with JS">
                    Trade stocks automatically with JavaScript code using Alpaca and GPT-3
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem
                     id="covid19"
                     title="covid-tracker"
                     thumbnail={thumbCvid}
                   >
                      Simple Covid Tracker App built with Vue.js & Tailwind powered by covid19api
                   </WorkGridItem>
                    </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="crowdfund" thumbnail={thumbCrwd} title="CrowdFunder">
                    Blockchain Crowdfunding Platform made with ReactJS and Thirdweb
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="finance" thumbnail={thumbFin} title="Financeer">
                    Financial App Dashboard with Machine Learning Predictions
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="3dshowcase" thumbnail={thumb3d} title="3D Product Showcase">
                    AI Powered 3D Product showcase website
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
                    A Magic the Gathering application for making and managing decks with different formats in an easy and fluid way. made for the players and developers.
                  </WorkGridItem>
              </Section>
              <Section delay={0.3}>
                  <WorkGridItem id="aigen" thumbnail={thumbAiGen} title="DALL-EE">
                    AI Image Generator made with OpenAI DALL-E model and MERN stack that generates images based on the entered text.
                  </WorkGridItem>
              </Section>
              {/* <Section delay={0.3}>
                  <WorkGridItem id="bettertwtr" thumbnail={thumbtwtr} title="twttr">
                    better Tw*tter Clone
                  </WorkGridItem>
              </Section> */}
          </SimpleGrid>
      </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

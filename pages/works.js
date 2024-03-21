import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOculus from '../public/images/works/oculus.jpg'
import thumbCrwd from '../public/images/works/crowdfund.png'
import thumbKom from '../public/images/works/magic.png'
import thumbJStrader from '../public/images/works/jstrader.png'
import thumbAiGen from '../public/images/works/genai.png'
import thumbFin from '../public/images/works/financeer.png'
import thumb3d from '../public/images/works/3dshowr.png'
import thumbprmt from '../public/images/works/prompt.png'
import thumbbrd from '../public/images/works/breaddit.png'
import thumbtsk from '../public/images/works/taskify.png'
import thumbjnt from '../public/images/works/jotion0.png'
import thumbfig from '../public/images/works/figpro.png'
import thumbmor from '../public/images/works/mori.png'
import thumblingo from '../public/images/works/lingo0.png'

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
                  <WorkGridItem id="jotion" title="Jotion" thumbnail={thumbjnt}>
                    productivity centered connected workspace for docs & projects
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                <WorkGridItem id="taskify" thumbnail={thumbtsk} title="Taskify">
                  Kanban-style, list-making collaborative application
                </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                <WorkGridItem id="jstrader" thumbnail={thumbJStrader} title="Trade Stocks with JS">
                  Trade stocks automatically with JS code using Alpaca and GPT-3
                </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                <WorkGridItem id="figpro" thumbnail={thumbfig} title="FigPro">
                  Minimalist collaborative web app for interface design
                </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="crowdfund" thumbnail={thumbCrwd} title="CrowdFunder">
                    Blockchain Crowdfunding Platform
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
              <Section delay={0.1}>
                  <WorkGridItem id="mori" thumbnail={thumbmor} title="Mori">
                    Visual workspace for brainstorming and project planning
                  </WorkGridItem>
              </Section>
              <Section delay={0.1}>
                  <WorkGridItem id="lingo" thumbnail={thumblingo} title="Lingo">
                    Interactive language learning SaaS platform
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
                  <WorkGridItem id="breaddit" thumbnail={thumbbrd} title="Breaddit">
                    Bread reddit
                  </WorkGridItem>
              </Section>
              <Section delay={0.3}>
                  <WorkGridItem id="aigen" thumbnail={thumbAiGen} title="DALL-EE">
                    AI Image Generator made with OpenAI DALL-E model that generates images based on the entered text.
                  </WorkGridItem>
              </Section>
              <Section delay={0.3}>
                  <WorkGridItem id="proomptz" thumbnail={thumbprmt} title="Proomptz">
                    Proomptz is an open-source AI prompting sharing tool.
                  </WorkGridItem>
              </Section>
              {/* <Section delay={0.3}>
                  <WorkGridItem id="bettertwtr" thumbnail={thumbtwtr} title="Better Tw*tter">
                    better Tw*tter Clone
                  </WorkGridItem>
              </Section> */}
          </SimpleGrid>
      </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

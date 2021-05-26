import React from 'react'
import styled from 'styled-components'


import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'




export function Home() {
  return (
    <MainContentHome>
      <Container>
        <Section>
          <SectionRow>
            <Title>White Elephant exchange</Title>
          </SectionRow>
          <ContentBlock>

          </ContentBlock>
        </Section>
      </Container>
    </ MainContentHome>
  )
}


const MainContentHome = styled(MainContent)`
  background-image: white;
`

import React from 'react'
import styled from 'styled-components'

import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import whiteElephantLogo from '../assets/images/white-elephant133x100.svg'
import { Button } from '../components/base/Button'
import { useHistory } from 'react-router'

export function Home() {
  const history = useHistory()

  return (
    <MainContentHome>
      <Container>
        <Section>
          <SectionRow justifyContent="center">
            <img src={whiteElephantLogo} width="300" alt="White Elephant Logo" />
          </SectionRow>
          <SectionRow justifyContent="center">
            <Title>White Elephant Exchange</Title>
          </SectionRow>
          <SectionRow justifyContent="center">
            <Button onClick={() => history.push('/play')}>Play</Button>
          </SectionRow>
        </Section>
      </Container>
    </MainContentHome>
  )
}

const MainContentHome = styled(MainContent)`
  background-image: white;
`

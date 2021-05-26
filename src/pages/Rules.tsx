import React from 'react'
import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers } from '@usedapp/core'
import {
  Container,
  ContentBlock,
  ContentRow,
  Item,
  List,
  MainContent,
  Section,
  SectionRow,
} from '../components/base/base'
import { Label } from '../typography/Label'
import { Text, TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import { TopBar } from '../components/TopBar'
import rules from '../static/rules.json'
import requirements from '../static/requirements.json'

const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

interface Item {
  text: string
  subItems?: Item[]
}

const rulesData: Item[] = rules.data
const requirementsData: Item[] = requirements.data

const EnumeratedList: React.FC<{ data: Item[] }> = ({ data }) => (
  <List>
    {data.map(({ text, subItems }, index) => (
      <>
        <Item>
          <b>{`${index + 1}. `}</b>
          {`${text}`}
        </Item>
        {subItems &&
          subItems.map(({ text }) => (
            <List>
              <Item sub>{`• ${text}`}</Item>
            </List>
          ))}
      </>
    ))}
  </List>
)

export function Rules() {
  const { account } = useEthers()
  const userBalance = useEtherBalance(account)
  const stakingBalance = useEtherBalance(STAKING_CONTRACT)

  return (
    <MainContent>
      <TopBar />
      <Container>
        <Section>
          <SectionRow>
            <Title>Rules</Title>
          </SectionRow>
          <SectionRow>
            <ContentBlock>
              <EnumeratedList data={rulesData} />
            </ContentBlock>
          </SectionRow>
        </Section>
        <Section>
          <SectionRow>
            <Title>Requirements</Title>
          </SectionRow>
          <SectionRow>
            <ContentBlock>
              <EnumeratedList data={requirementsData} />
            </ContentBlock>
          </SectionRow>
        </Section>
      </Container>
    </MainContent>
  )
}

import React, { useState } from 'react'
import { useEthers, shortenAddress } from '@usedapp/core'
import { Button } from '../base/Button'
import { Colors } from '../../global/styles'
import styled from 'styled-components'

import { AccountModal } from './AccountModal'

export const AccountButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  const [showModal, setShowModal] = useState(false)

  return (
    <Account>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      {account ? (
        <Account>
          <AccountLabel onClick={() => setShowModal(!showModal)}>{shortenAddress(account)}</AccountLabel>
          <LoginButton onClick={() => deactivate()}>Disconnect</LoginButton>
        </Account>
      ) : (
        <LoginButton onClick={() => activateBrowserWallet()}>Connect</LoginButton>
      )}
    </Account>
  )
}

const Account = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`

const LoginButton = styled(Button)`
  float: right;
  background-color: ${Colors.Black[900]};
  color: white;
  border: none;
`

const AccountLabel = styled.div`
  float: left;

  border: 1px solid black;
  margin: 10px;
  margin-right: -40px;
  padding: 7px;
  padding-right: 40px;
  display: flex;

  background-color: ${Colors.Purple[400]};
  border-radius: 20px;
  &:hover {
    background-color: black;
    color: ${Colors.Black[900]};
  }
`

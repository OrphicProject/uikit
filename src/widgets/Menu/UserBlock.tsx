import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../components/Button/Button'
import { useWalletModal } from '../WalletModal'
import { Login } from '../WalletModal/types'
import { AddIcon } from '../../components/Svg'
import NetworkSwitch from './NetworkSwitch'
import Flex from '../../components/Flex/Flex'
import { networks as NETWORKS } from '../WalletModal/config'
import { AccountModalProps } from '../WalletModal/AccountModal'

export type UserBlockProps = {
  networks?: typeof NETWORKS
  isProduction: boolean
  account?: string
  login: Login
  logout: () => void
  buttonTitle?: string
  modalTitle?: string
  modelLogout?: string
  balance?: string
  explorerName?: string
  explorerLink?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
  networkSwitchVisible?: boolean
  networkSwitchItemCallback?: (chainId: string) => void
  isShowMenuPanel: boolean
} & Pick<AccountModalProps, 'gmartProfileLink'>

const StyledConnectButton = styled.div<{ isShowMenuPanel: boolean }>`
  ${({ isShowMenuPanel }) =>
    isShowMenuPanel
      ? css`
          margin-right: 10px;
        `
      : ''}
`

const StyledAddIcon = styled.div`
  margin-right: 16px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`

const StyledButtonTitle = styled.div`
  font-size: 14px;
`

const StyledFlex = styled(Flex)<{ isShowMenuPanel: boolean }>`
  ${({ isShowMenuPanel }) =>
    isShowMenuPanel
      ? css`
          @media screen and (max-width: 968px) {
            > *:last-child {
              margin-right: 60px;
            }
          }
        `
      : ''}
`

const UserBlock: React.FC<UserBlockProps> = (props) => {
  const {
    networks,
    isProduction,
    account,
    login,
    logout,
    buttonTitle,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook,
    networkSwitchVisible,
    networkSwitchItemCallback,
    gmartProfileLink,
    isShowMenuPanel,
  } = props

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    isProduction,
    login,
    logout,
    account,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook,
    undefined,
    gmartProfileLink
  )
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null

  return (
    <StyledFlex isShowMenuPanel={isShowMenuPanel} alignItems="center" style={{ pointerEvents: 'all' }}>
      {networkSwitchVisible && (
        <NetworkSwitch
          networks={networks}
          isProduction={isProduction}
          networkSwitchItemCallback={networkSwitchItemCallback}
        />
      )}
      {account ? (
        <Button
          size="md"
          onClick={() => {
            onPresentAccountModal()
          }}
          data-id="account-button"
        >
          {accountEllipsis}
        </Button>
      ) : (
        <StyledConnectButton isShowMenuPanel={isShowMenuPanel}>
          <Button
            size="md"
            onClick={() => {
              onPresentConnectModal()
            }}
            data-id="connect-button"
          >
            <StyledAddIcon>
              <AddIcon />
            </StyledAddIcon>
            <StyledButtonTitle>{buttonTitle}</StyledButtonTitle>
          </Button>
        </StyledConnectButton>
      )}
    </StyledFlex>
  )
}

export default UserBlock

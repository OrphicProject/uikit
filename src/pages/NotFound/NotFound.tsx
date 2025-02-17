import React from 'react'
import { useTranslation } from 'react-multi-lang'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { Heading } from '../../components/Heading'
import { SocialNetworks } from '../../components/SocialNetworks'
// import NotfoundPreview from './assets/notfound-preview'
// import CloudRight from './assets/background-cloud-right'
// import CloudLeft from './assets/background-cloud-left'

const StyledWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  justify-content: center;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  overflow: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  @media screen and (max-width: 768px) {
    padding: 8px;
    overflow: hidden;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  // width: 55%;
  width: 700px;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
//
// const ImageWrapper = styled.div`
//   & > svg {
//     width: 100%;
//     height: auto;
//   }
// `

// const CloudsWrapper = styled.div`
//   top: 0;
//   left: 0;
//   position: absolute;
//   height: calc(100vh - 64px);
//   width: 100vw;
//   overflow: hidden;
// `

// const CloudWrapper = styled.div`
//   position: absolute;
//   z-index: -1;
//   & > img {
//     width: 100%;
//   }
//   &.left {
//     top: -200px;
//     left: -200px;
//   }
//   &.right {
//     right: -200px;
//     bottom: -200px;
//   }
//   @media screen and (max-width: 480px) {
//     &.left {
//       top: -300px;
//       left: -300px;
//     }
//     &.right {
//       right: -300px;
//       bottom: -300px;
//     }
//   }
// `

const StyledHeading = styled(Heading)`
  font-weight: bold;
  font-size: 64px;
  line-height: 72px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 56px;
    line-height: 64px;
  }
  @media screen and (max-width: 615px) {
    font-size: 50px;
    line-height: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const StyledText = styled(Text)`
  width: 100%;
  font-size: 24px;
  line-height: 30px;
  margin: 24px 0 30px 0;
  letter-spacing: 0.3px;
  color: #909090;

  &.small {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin: 24px auto 32px auto;
    // width: 450px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
  }
`

const StyledButton = styled(Button)`
  margin: 10px auto 48px auto;
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    margin: 20px auto;
  }
`

type PropsType = {
  redirectURL?: string
}

const NotFound: React.FC<PropsType> = ({ redirectURL = 'https://gravis.finance/' }) => {
  const t = useTranslation()

  return (
    <StyledWrapper>
      <InfoWrapper>
        <StyledHeading>{t('Something went wrong')}</StyledHeading>
        <StyledText>
          {t('pageNotFound')} <br />
          {t('May the force be with you!')}
        </StyledText>

        <a href={redirectURL} rel="noreferrer noopener">
          <StyledButton>{t('Go back to main site')}</StyledButton>
        </a>

        <StyledText className="small">{t('Or subscribe to our social networks')}</StyledText>

        <SocialNetworks />
      </InfoWrapper>
      {/* <ImageWrapper>
        <NotfoundPreview />
      </ImageWrapper> */}

      {/* <CloudsWrapper>
        <CloudWrapper className="left">
          <CloudLeft />
        </CloudWrapper>
        <CloudWrapper className="right">
          <CloudRight />
        </CloudWrapper>
      </CloudsWrapper> */}
    </StyledWrapper>
  )
}

export default NotFound

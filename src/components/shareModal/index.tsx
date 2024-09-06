import share from './share.svg';
import * as S from './styles'

type Props = {
  hide: () => void
}

export default function ShareModal({ hide }: Props) {
  return (
    <S.Overlay onClick={hide}>
      <S.Container>
        <img src={share} alt="Share QR Code" width="500" height="500" />
        <div>https://kkns.eu/morpheus</div>
      </S.Container>
    </S.Overlay>
  )
}
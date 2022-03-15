import styled from 'styled-components';
import Images from 'next/image';

interface AvatarProps {
  img?: string
}

const Container = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

const NO_LOGGED_IN_AVATAR_PATH = '/images/no-login-avatar.png';

const Avatar = ({ img }: AvatarProps) => {
  return (
    <Container>
      <Images
        src={img || NO_LOGGED_IN_AVATAR_PATH}
        alt="avatar"
        layout="responsive"
        height={38}
        width={38}
      />
    </Container>
  )
};

export default Avatar;

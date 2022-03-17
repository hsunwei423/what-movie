import { Children, ReactChild, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ItemProps {
  isShow: boolean
  translateX: string
}

const Item = styled.div<ItemProps>`
  position: relative;
  display: ${props => props.isShow ? 'block' : 'none'};
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform .6s ease-in-out;

  transform: translateX(${props => props.translateX});
`;

interface CarouselItemProps {
  isShow: boolean
  children: ReactChild
}


const CarouselItem = ({ isShow, children }: CarouselItemProps) => {
  const [visible, setVisible] = useState(isShow);
  const [translateX, setTranslateX] = useState("none");

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout> | null = null;
    if (isShow) {
      setVisible(true);
      setTranslateX("100%");
      timer1 = setTimeout(() => {
        setTranslateX("0")
      }, 0);
    }

    return () => {
      timer1 && clearTimeout(timer1);
    }
  }, [isShow]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let timer2: ReturnType<typeof setTimeout> | null = null;
    if (!isShow) {
      setTranslateX("-100%");
      timer2 = setTimeout(() => {
        setTranslateX("0");
      }, 0);
      timer = setTimeout(() => {
        setVisible(false);
      }, 600);
    }

    return () => {
      timer && clearTimeout(timer);
    }
  }, [isShow]);

  return (
    <Item isShow={visible} translateX={translateX}>
      {children}
    </Item>
  )
};

export default CarouselItem;

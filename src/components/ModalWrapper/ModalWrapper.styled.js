import styled from 'styled-components';
import { theme } from '../../assets/styles/vars';

import { NavLink } from 'react-router-dom';

export const ContentWrapper = styled.div`

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 7px;
    height: 264px;
  }

  &::-webkit-scrollbar-track {
    background: red;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Name = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const CloseModalBtn = styled.svg`
  cursor: pointer;
  width: 32px;
  height: 32px;
  stroke: ${theme.color.maintext};
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const RatingReviews = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const LocationIconSvg = styled.svg`
  width: 14px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${theme.color.maintext};
`;

export const LocationText = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RationLocationLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Description = styled.p`
  margin-top: 24px;
  color: ${theme.color.text};
`;

export const StyledLink = styled(NavLink)`
  color: ${theme.color.maintext};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &.active {
    &::after {
      position: absolute;
      content: '';
      background-color: ${theme.color.button};
      height: 5px;
      width: 100%;
      bottom: -26px;
    }
  }
`;

export const AdditionalNavigation = styled.div`
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`;
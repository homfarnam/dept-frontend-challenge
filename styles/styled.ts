import Styled from 'styled-components'

export const StyledMenuItem = Styled.li`
  position: relative;
  animation fadeIn 0.3s ease-in ${({ index }: { index: number }) =>
    index * 0.1}s both;
`

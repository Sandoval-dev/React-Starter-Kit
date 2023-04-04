import styled, {css} from 'styled-components'

export const Title=styled.h1`
font-sizde:3rem;
font-weight:bold;
text-decoration:underline;
${props => props.theme=='dark' && css`
 background:#000;
 color:#fff;
 &:hover{
    background:yellow;
 }

`}
`
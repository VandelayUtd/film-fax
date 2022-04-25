import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// const animateLoading = css`
//     animation: nav-load
// `

export const NavLink = styled(Link)`
    padding: 10px 15px;
    background: white;
    color: black;
    font-size: 1rem;
    margin: .25em;
    padding: .5em .75em;
    cursor: pointer;
    text-decoration: none;
`

export const NavContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
`

export const LineA = styled.hr`
    border: 2px solid #9BA242;
`

export const LineB = styled.hr`
    border: 2px solid #CF9400;
`
export const LineC = styled.hr`
    border: 2px solid #D87702;
`

export const LineD = styled.hr`
    border: 2px solid #D76134;
`

export const LineE = styled.hr`
    border: 2px solid #C53D44;
`

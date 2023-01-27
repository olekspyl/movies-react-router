import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
padding-left: 50px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;

`
export const NavItem = styled(NavLink)`
display: flex;
padding: 10px;
font-size: 28px;
margin-right: 10px;
text-align: center;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 700;
 

&.active {
    background-color: #e0c7c0;
    color: white;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: grey;
}
`
export const MoviesList = styled.ul`
display: flex;
flex-direction: column;
`
export const Movie = styled.li`
display: flex;
text-decoration: none;
margin-bottom: 10px;
font-size: 20px;
`

export const MovieLink = styled(NavLink)`
text-decoration: none;
color: black;

&.active {
    background-color: #e0c7c0;
    color: white;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: grey;
}
`

export const MovieContainer = styled.div`
padding: 20px;
display: flex;
`

export const MoviePoster = styled.img`
margin-right: 20px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px 4px 4px 4px;
`



export const Title = styled.h1`
margin: 0 0 20px 0;
`
export const Score = styled.p`
font-size: 20px;
margin: 0 0 20px 0;
`
export const OverviewTitle = styled.h3`
margin: 0 0 5px 0;
`
export const Overview = styled.p`
margin: 0 0 20px 0;
`

export const GenresTitle = styled.h4`
margin: 0 0 5px 0;

`

export const GenresList = styled.ul`
margin: 0 0 20px 0;
list-style: none;
display: flex;
padding: 0px;

`
export const GenresItem = styled.li`
padding-right: 15px;
`

export const AdditionalInfo = styled.h2`
margin: 0 0 20px 0;
`

export const CastLink = styled(NavLink)`
text-decoration: none;
color: black;
margin-right: 20px;
font-size: 18px;
font-weight: 700;

&.active {
    background-color: #e0c7c0;
    color: white;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: grey;
}
`


export const ReviewsLink = styled(NavLink)`
text-decoration: none;
color: black;
font-size: 18px;
font-weight: 700;

&.active {
    background-color: #e0c7c0;
    color: white;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: grey;
}
`

export const ReviewAuthor = styled.p`
margin: 0 0 20px 0;
font-weight: 700;

`

export const ReviewItem = styled.li`
list-style: none;
`

export const CastList = styled.ul`
display: flex;
flex-direction: row;
padding: 0px;
`

export const CastItem = styled.li`
list-style: none;
padding-right: 20px;
`

export const CastName = styled.p`
font-weight: 700;
`

export const FormContainer = styled.div`
display: flex;

margin-top: 15px;
`

export const Button = styled.button`
margin-left: 20px;

 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            width: 80px;
            height: 35px;
            border-color: transparent;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.88px;
            
            letter-spacing: 0.06em;
            justify-content: center;
            cursor: pointer;
            transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        color 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0px;
            &:hover, &:focus {
                    background-color: #e0c7c0;
                    color: white;
                    box-shadow:
                        0px 3px 1px rgba(0, 0, 0, 0.1),
                        0px 1px 2px rgba(0, 0, 0, 0.08),
                        0px 2px 2px rgba(0, 0, 0, 0.12);
                }

`

export const Input = styled.input`
margin-left: 20px;
width: 200px;
height: 30px;
box-shadow:
            0px 3px 1px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.08),
            0px 2px 2px rgba(0, 0, 0, 0.12);
`

import { ButtonBack, LinkBack } from "components/App.styled";

const ButtonBackComponent = ({ location }) => {
       const backLinkHref = location.state.from ?? "/";
    return (
    <ButtonBack type="button">
        <LinkBack state={{ from: backLinkHref }} to={"/"}>Back</LinkBack>
    </ButtonBack>
)
    
}

export default ButtonBackComponent;

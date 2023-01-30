import { FormContainer, Button, Input} from "components/App.styled";

const InputComponent = ({ onSubmit, query, onQueryChange, onHandleClick }) => {
    return (
        <FormContainer>
            <form onSubmit={onSubmit}>
                <label>
                    <Input type="text"
                        value={query}
                        onChange={onQueryChange}>
                    </Input>
                </label>
            </form>
            <Button type="button" onClick={onHandleClick}>Search</Button>
        </FormContainer>
    );
};

export default InputComponent;

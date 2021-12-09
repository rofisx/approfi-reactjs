import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { decrementWithCheckingAction, increment } from "../../app/features/counter/actions";

const style = {
    margin:'60px 0px 0px 0px',
    fontSize: '72pt',
    color: 'white'
}

const Button = styled.button
    `
    border-radius: 10px;
    padding : 15px;

    &:hover{
        background: #2196f3;
        color: white;
    }
    `


const Counter = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return(
        <div style={style}>
            <Button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</Button>
            {' '}<span>{count}</span>{' '}
            <Button onClick={() => dispatch(increment(1))}>+</Button>
        </div>
    )
}

export default Counter;
import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
    return <div className="calc__key" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</div>
}
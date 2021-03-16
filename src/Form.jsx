import React, { useState } from 'react';

const Form = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "")
            alert("Write something");
        else {
            props.submit(value);
            setValue('');
        }
    }

    const onChangeText = (e) => {
        setValue(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" value={value} placeholder="Todo's description" onChange={onChangeText} />
        </form>
    )
}

export default Form;


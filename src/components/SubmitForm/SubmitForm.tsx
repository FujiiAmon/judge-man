import React from "react";
import InputArea from "./InputArea";
import DropArea from "./DropArea";
import SubmitButton from "./SubmitButton";

const SubmitForm = () => {
    return (
        <>
            <form action="#">
                <InputArea />
                <DropArea />
                <SubmitButton />
            </form>
        </>
    );
};

export default SubmitForm;

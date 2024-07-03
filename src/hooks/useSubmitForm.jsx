import {useState, useCallback} from "react";
import { handleSubmitForm } from "../api/api";
import { useNavigate } from "react-router-dom";


export const useSubmitForm = async({onFormSubmit, formValues}) => {

    const navigate = useNavigate();

    const [response, setResponse] = useState({
        message: "",
        data: {}
    });

    const handleSubmit = useCallback(async () => {
        await handleSubmitForm(formValues)
        .then((res) => {
            onFormSubmit(res);
            if(res.message === "Success") {
                navigate("/second");
            }
        })
        .catch((error) => {
            setResponse((prevState) =>({
                ...prevState,
                message: "Internal server error"
            }))
        }); 

    }, [navigate, formValues, onFormSubmit]);
    
    return { handleSubmit,response};
}

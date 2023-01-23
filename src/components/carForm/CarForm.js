import {useForm} from "react-hook-form";

const CarForm = () => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all"});

    return (
        <form>
            <input type="text" placeholder={'brand'}/>
            <input type="text" placeholder={'price'}/>
            <input type="text" placeholder={'year'}/>

            <button>update</button>
        </form>
    );
};

export {CarForm};
import {useForm} from "react-hook-form";
import {postService} from "../../services";

const PostForm = ({setPosts}) => {

const {register, handleSubmit, reset } = useForm()

    const  submit = async (data) => {
   await postService.newPost(data)
        .then(({data}) => setPosts((prev) => [...prev, data]));
        reset()

    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'post'} {...register('name')}/>
            <button>create comment</button>

        </form>
    );
};

export {PostForm};
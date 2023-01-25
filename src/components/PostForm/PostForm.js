import {useForm} from "react-hook-form";
import {postService} from "../../services";

const PostForm = ({setPosts}) => {

const {register, handleSubmit, reset, getValues} = useForm()

    function submit(dataInput) {
    postService.newPost(dataInput)
        .then(({data}) => setPosts([...data]) )

    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'post'} {...register('name')}/>
            <button>create comment</button>

        </form>
    );
};

export {PostForm};
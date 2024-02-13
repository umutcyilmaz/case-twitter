const NewPosts = ({ newPost,handleShowNewPosts }) => {
    return (
      <div>
        {newPost > 0 && (
          <button onClick={()=>handleShowNewPosts()} className="flex justify-center items-center border-b border-borderColor h-[48px] w-full">
            <div className="text-primaryColor text-[15px] leading-[20px]">
              Show {newPost} posts
            </div>
          </button>
        )}
      </div>
    );
  };
  export default NewPosts;
  
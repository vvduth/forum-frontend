import React, { useState } from "react";
import useAuthStore from "../store/authStore";
import { sendComment } from "../service";

const CommentForm = ({ refreshPostCallback, postId }: any) => {
  const { userProfile } = useAuthStore() as any;
  const [message, setMessage] = useState("");

  const sendCommentHanlder = async () => {
    try {
      await sendComment(userProfile.token, postId, message);
      setMessage("");
      refreshPostCallback();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      {userProfile ? (
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {userProfile?.name}, Share your though{" "}
        </h3>
      ) : (
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Login to like comment
        </h3>
      )}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="comment"
          placeholder="Comment"
        />
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={sendCommentHanlder}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentForm;

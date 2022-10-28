import React, { useEffect, useState } from "react";
import { user } from "../data/Dummy_data";

import { IUser } from "../types/types";

interface IProps {
  author: string | undefined;
}

const Author = ({ author }: any) => {
  const [authorDetail, setAuthorDetail] = useState<any | null>();

  

  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <img
          src={`https://source.unsplash.com/1600x900/?${author?.username}`}
          alt="author pic"
          className="inline-block align-middle rounded-full h-[100px] w-[100px]"
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">
        {author?.username}
      </h3>
      <p className="text-white text-ls">{author?.bio}</p>
    </div>
  );
};

export default Author;

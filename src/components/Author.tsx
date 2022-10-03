import React, { useEffect, useState } from "react";
import { user } from "../data/Dummy_data";

import { IUser } from "../types/types";

interface IProps {
  author: string | undefined;
}

const Author = ({ author }: IProps) => {
  const [authorDetail, setAuthorDetail] = useState<IUser | null>();

  useEffect(() => {
    if (author) {
      let postAuthor = user.filter((item: IUser) => item.name === author);
      setAuthorDetail(postAuthor[0]);
    }
  }, [author]);

  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <img
          src={`https://source.unsplash.com/1600x900/?${authorDetail?.id}`}
          alt="author pic"
          className="inline-block align-middle rounded-full h-[100px] w-[100px]"
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">
        {authorDetail?.name}
      </h3>
      <p className="text-white text-ls">{authorDetail?.desc}</p>
    </div>
  );
};

export default Author;

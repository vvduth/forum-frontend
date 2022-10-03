import React, { FC, PropsWithChildren } from "react";
import Categories from "./Categories";
import FeaturePost from "./FeaturePost";
import Header from "./Header";
import PostWidget from "./PostWidget";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <FeaturePost />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">{children}</div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

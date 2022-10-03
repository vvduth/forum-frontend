export interface IPost{
    id: number , 
    postedAt: string,
    title: string,
    author: string,
    category: string,
    desc?: string,
  }


  export interface IUser {
    name: string, 
    id: number, 
    desc: string, 
  }
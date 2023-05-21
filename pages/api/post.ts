import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../service/post";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getPosts().then((data) => res.status(200).json(data));
}

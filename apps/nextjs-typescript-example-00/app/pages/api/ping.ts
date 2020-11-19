import { NextApiRequest, NextApiResponse } from "next"

export type PingResponse = {
  message: string
}

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PingResponse>
) => {
  const { query } = req

  res.status(200).json({
    message: `Next.js API is online at ${Date.now()} and received query object: ${JSON.stringify(
      query,
      null,
      2
    )}`,
  })
}

export default handler

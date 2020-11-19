import { NextApiRequest, NextApiResponse } from "next"

import {
  generateMockNextApiRequest,
  generateMockNextApiResponse,
} from "../../__mocks__/NextApi"
import { handler, PingResponse as HandlerResponse } from "../../pages/api/ping"

describe("/api/ping", () => {
  describe("when invoked should return", () => {
    let req: NextApiRequest
    let res: NextApiResponse

    beforeEach(() => {
      req = generateMockNextApiRequest()
      res = generateMockNextApiResponse()
    })

    // We need to reset mocks after every test so that we can reuse them
    afterEach(() => {
      jest.resetAllMocks()
    })

    it("an HTTP status code of 200", async () => {
      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(200)
    })
    it("an expected JSON response from our handler", async () => {
      await handler(req, res)
      const expectedResponse: HandlerResponse = {
        message: expect.any(String),
      }
      const expectedResponseShape = expect.objectContaining(expectedResponse)

      expect(res.json).toHaveBeenCalledWith(expectedResponseShape)
    })
  })
})

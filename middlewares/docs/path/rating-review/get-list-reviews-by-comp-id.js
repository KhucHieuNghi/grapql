/**
 * @swagger
 * /company/{compId}/reviews:
 *   get:
 *     tags:
 *       - Rating And Reviews
 *     summary: "Lấy danh sách reviews theo company id"
 *     description: Lấy danh sách reviews theo company id
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: compId
 *         type: integer
 *         in: path
 *         required: true
 *         description: Mã công ty
 *     responses:
 *      200:
 *          description: Kết quả
 *          schema:
 *              type: object
 *              properties:
 *                  page:
 *                      type: integer
 *                  total_pages:
 *                      type: integer
 *                  total:
 *                      type: integer
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer,
 *                        status:
 *                          type: integer
 *                        trip_id:
 *                          type: integer
 *                        trip_name:
 *                          type: string
 *                        comp_id:
 *                          type: integer
 *                        comment:
 *                          type: string
 *                        rating:
 *                          type: string
 *                        company_reply:
 *                          type: array
 *              example:
 *                  "page": 1,
 *                  "total_pages": 1,
 *                  "total": 1,
 *                  "items": [
 *                    {"id": 1,
 *                    "status": 2,
 *                    "trip_id": 1071528,
 *                    "trip_name": "",
 *                    "name": null,
 *                    "comp_id": 20717,
 *                    "comment": "hello bad contact ",
 *                    "created_at": "2020-02-13T11:38:37.721Z",
 *                    "approved_at": "2020-02-13T11:38:37.721Z",
 *                    "rating": "4",
 *                    "company_reply": []}
 *                  ]
 *      401:
 *          description: Lỗi về xác thực Authorized
 *          schema:
 *              type: object
 *              properties:
 *                  error:
 *                      type: object
 *                      properties:
 *                          code:
 *                              type: integer
 *                          message:
 *                              type: string
 *                      example:
 *                          code: 401
 *                          message: Unauthorized
 *      400:
 *          description: "Thiếu/sai thông tin truyền vào"
 *          schema:
 *              type: object
 *              properties:
 *                  error:
 *                      type: object
 *                      properties:
 *                          code:
 *                              type: integer
 *                          message:
 *                              type: string
 *                          codeError:
 *                              type: string
 *                              description: |
 *                                  Các loại mã lỗi:
 *                                      - INVALID_PARAMETER: Thiếu/sai dữ liệu truyền vào
 *                      example:
 *                          code: 400
 *                          message: Invalid Parameter
 *                          codeError: "INVALID_PARAMETER"
 *
 */

/**
 * @swagger
 * /reviews/{user_review_id}/reply/{id}:
 *   delete:
 *     tags:
 *       - Company reply
 *     summary: "Delete company reply"
 *     description: Delete company reply
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: user_review_id
 *         type: integer
 *         in: path
 *         required: true
 *         description: Mã user review id
 *       - name: id
 *         type: integer
 *         in: path
 *         required: true
 *         description: Mã company reply
 *     responses:
 *      200:
 *          description: Kết quả
 *          schema:
 *              type: object
 *              properties:
 *                  message:
 *                      type: string
 *                  data:
 *                      type: object
 *                      properties:
 *                        company_reply:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                            user_review_id:
 *                              type: integer
 *                            content:
 *                              type: string
 *                            created_by:
 *                              type: string
 *                            is_activated:
 *                              type: integer
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                    "company_reply": {
 *                      "id": 46,
 *                      "user_review_id": 1048,
 *                      "content": "A Tien test company reply",
 *                      "created_by": "fe",
 *                      "updated_by": "fe",
 *                      "is_activated": 0,
 *                    }
 *                  }
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

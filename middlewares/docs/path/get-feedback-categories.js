/**
 * @swagger
 * /feedback/category:
 *  get:
 *      tags:
 *          - Feedback
 *      summary: "Lấy danh sách feedback category"
 *      description: Lấy danh sách feedback category
 *      produces:
 *          - application/json
 *      security:
 *          - Bearer: []
 *      responses:
 *          200:
 *              description: danh sách feedback category
 *              schema:
 *                  type: array
 *                  items:
 *                      type: object
 *                      description: category info
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: category id
 *                          type:
 *                              type: string
 *                              description: Loại feedback (feedback/bug report)
 *                          name:
 *                              type: string
 *                              description: Tên category (tiếng Việt)
 *                          name_en:
 *                              type: string
 *                              description: Tên category (tiếng Anh)
 *          401:
 *              description: Lỗi về xác thực Authorized
 *              schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                          type: object
 *                          properties:
 *                              code:
 *                                  type: integer
 *                              message:
 *                                  type: string
 *              example:
 *                  code: 401
 *                  message: Unauthorized
 */

/**
 * @swagger
 * /feedback:
 *   get:
 *     tags:
 *       - Feedback
 *     summary: "Danh sách feedback của tôi"
 *     description: Danh sách feedback của tôi
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: per_page
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *          description: Danh sách feedback
 *          schema:
 *              type: object
 *              properties:
 *                  page:
 *                      type: integer
 *                      description: Trang hiện tại
 *                  per_page:
 *                      type: integer
 *                      description: Số phần tử tối đa trong trang
 *                  total:
 *                      type: integer
 *                      description: Tổng số phần tử
 *                  total_pages:
 *                      type: integer
 *                      description: Tổng số trang
 *                  items:
 *                      type: array
 *                      description: Danh sách phần tử
 *                      items:
 *                          type: object
 *                          description: Thông tin feedback
 *                          properties:
 *                            id:
 *                              type: integer
 *                            user_id:
 *                              type: integer
 *                            type:
 *                              type: string
 *                              description: Loại feedback (feedback/bug report)
 *                            category_id:
 *                              type: integer
 *                            details:
 *                              type: string
 *                              description: Nội dung feedback
 *                            created_at:
 *                              type: date
 *                              description: Ngày khởi tạo
 *                            updated_at:
 *                              type: date
 *                              description: Ngày cập nhật
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
 *                                      - INVALID_PARAMETER: Sai dữ liệu truyền vào
 *                      example:
 *                          code: 400
 *                          message: Invalid Parameter
 *                          codeError: "INVALID_PARAMETER"
 */

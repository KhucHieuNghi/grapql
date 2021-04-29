/**
 * @swagger
 * /me/used_point:
 *   get:
 *     tags:
 *       - Lịch sử dùng điểm
 *     summary: "Lịch sử dùng điểm"
 *     description: Lịch sử dùng điểm
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
 *          description: Danh sách các lịch sử sử dụng điểm.
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
 *                          description: Thông tin sử dụng điểm
 *                          properties:
 *                            reward_point:
 *                              type: integer
 *                              description: Điểm đã sử dụng
 *                            description:
 *                              type: string
 *                              description: Mô tả lý do sử dụng
 *                            description_en:
 *                              type: string
 *                              description: Mô tả lý do sử dụng
 *                            created_at:
 *                              type: date
 *                              description: Ngày khởi
 *                            promotion:
 *                              type: object
 *                              description: Thông tin khuyến mãi
 *                              properties:
 *                                name:
 *                                  type: string
 *                                  description: Tên khuyến mãi
 *                                name_en:
 *                                  type: string
 *                                  description: Tên khuyến mãi (Eng)
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

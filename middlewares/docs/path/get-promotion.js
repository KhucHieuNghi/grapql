/**
 * @swagger
 * /promotion:
 *   get:
 *     tags:
 *       - Promotion
 *     summary: "Lấy danh sách các khuyến mãi"
 *     description: Lấy danh sách khuyến mãi khả dụng
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
 *          description: Danh sách các khuyến mãi.
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
 *                          description: Thông tin khuyến mãi
 *                          properties:
 *                            banner_url:
 *                              type: string
 *                              description: URL của hình ảnh đại diện khuyến mãi
 *                            name:
 *                              type: string
 *                              description: Tên khuyến mãi
 *                            partner:
 *                              type: object
 *                              description: Thông tin đối tác
 *                              properties:
 *                                name:
 *                                  type: string
 *                                  description: Tên đối tác
 *                            fare:
 *                              type: integer
 *                              description: Giá gốc
 *                            discount:
 *                              type: integer
 *                              description: Giá khuyến mãi
 *                            start_date:
 *                              type: date
 *                              description: Từ ngày
 *                            end_date:
 *                              type: date
 *                              description: Đến ngày
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

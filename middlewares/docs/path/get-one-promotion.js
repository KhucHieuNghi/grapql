/**
 * @swagger
 * /promotion/{id}:
 *   get:
 *     tags:
 *       - Promotion
 *     summary: "Lấy thông tin khuyến mãi"
 *     description: Lấy thông tin khuyến mãi
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: id
 *         type: integer
 *         in: path
 *         required: true
 *         description: Mã khuyến mãi
 *     responses:
 *      200:
 *          description: Thông tin coupon
 *          schema:
 *              type: object
 *              properties:
 *                banner_url:
 *                  type: string
 *                  description: URL của hình ảnh đại diện khuyến mãi
 *                name:
 *                  type: string
 *                  description: Tên khuyến mãi
 *                fare:
 *                  type: integer
 *                  description: Giá gốc
 *                discount:
 *                  type: integer
 *                  description: Giá khuyến mãi
 *                description:
 *                  type: string
 *                  description: Mô tả
 *                rules:
 *                  type: string
 *                  description: Thể lệ
 *                user_manual:
 *                  type: string
 *                  description: Hướng dẫn sử dụng
 *                start_date:
 *                  type: date
 *                  description: Từ ngày
 *                end_date:
 *                  type: date
 *                  description: Đến ngày
 *                partner:
 *                  type: object
 *                  description: Thông tin đối tác
 *                  properties:
 *                    phone:
 *                      type: string
 *                      description: Số điện thoại
 *                    email:
 *                      type: string
 *                      description: Email
 *                    introduction:
 *                      type: string
 *                      description: Giới thiệu
 *                    name:
 *                      type: string
 *                      description: Tên đối tác
 *                    icon:
 *                      type: string
 *                      description: URL Icon đối tác
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

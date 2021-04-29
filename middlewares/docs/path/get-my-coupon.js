/**
 * @swagger
 * /coupon/me:
 *   get:
 *     tags:
 *       - Coupon
 *     summary: "Lấy danh sách các ưu đãi của tôi"
 *     description: Lấy danh sách các ưu đãi của tôi
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
 *          description: Danh sách các coupon.
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
 *                          description: Thông tin coupon
 *                          properties:
 *                            promotion:
 *                              type: object
 *                              description: Thông tin khuyến mãi
 *                              properties:
 *                                name:
 *                                  type: string
 *                                  description: Tên khuyến mãi
 *                            partner:
 *                              type: object
 *                              description: Thông tin đối tác
 *                              properties:
 *                                name:
 *                                  type: string
 *                                  description: Tên đối tác
 *                                icon:
 *                                  type: string
 *                                  description: URL Icon đối tác
 *                            expired:
 *                              tye: string
 *                              description: Ngày hết hạn
 *              example:
 *                  page: 1
 *                  per_page: 20
 *                  total: 14
 *                  total_pages: 1
 *                  items:
 *                    - banner_url: "https://storage.googleapis.com/fe-production/images/header/home_banner_default.png"
 *                      name: Coupon 20k
 *                      partner: Vexere
 *                      fare: 500
 *                      discount: 300
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

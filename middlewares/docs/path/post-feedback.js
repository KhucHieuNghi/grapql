/**
 * @swagger
 * /feedback:
 *   post:
 *     tags:
 *       - Feedback
 *     summary: "Gửi feedback"
 *     description: Gửi feedback
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: type
 *         type: string
 *         in: formData
 *         required: true
 *         description: Loại feedback (feedback/bug_report)
 *       - name: category_id
 *         type: integer
 *         in: formData
 *         required: true
 *         description: feedback category
 *       - name: details
 *         type: string
 *         in: formData
 *         required: true
 *         description: Nội dung feedback
 *     responses:
 *      200:
 *          description: Thông tin feedback
 *          schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                type:
 *                  type: string
 *                  description: Loại feedback (feedback/bug report)
 *                category_id:
 *                  type: integer
 *                details:
 *                  type: string
 *                  description: Nội dung feedback
 *                created_at:
 *                  type: date
 *                  description: Ngày khởi tạo
 *                updated_at:
 *                  type: date
 *                  description: Ngày cập nhật
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
 *                      example:
 *                          code: 400
 *                          message: Invalid Parameter
 *                          codeError: "INVALID_PARAMETER"
 */

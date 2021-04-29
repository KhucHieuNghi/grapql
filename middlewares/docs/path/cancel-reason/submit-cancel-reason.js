/**
 * @swagger
 * /cancel-reason:
 *   post:
 *     tags:
 *       - Vxr Cancel Ticket Reason
 *     summary: "Submit"
 *     description: Submit
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: bookingCode
 *         type: string
 *         in: formData
 *         required: true
 *         description: Mã booking code
 *       - name: value
 *         type: string
 *         in: formData
 *         required: true
 *         description: Value
 *       - name: otherContent
 *         type: string
 *         description: Nội dung khác
 *       - name: cancelReasonId
 *         type: integer
 *         in: formData
 *         required: true
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
 *                        cancel_ticket_reason:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                            booking_code:
 *                              type: string
 *                            cancel_reason:
 *                              type: string
 *                            other_content:
 *                              type: string
 *                            vxr_reason_cancel_ticket_id:
 *                              type: integer
 *                            status:
 *                              type: integer
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                    "cancel_ticket_reason": {
 *                      "id": 1,
 *                      "booking_code": "ABC1234",
 *                      "vxr_reason_cancel_ticket_id": 1,
 *                      "cancel_reason": "Test",
 *                      "status": 1
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

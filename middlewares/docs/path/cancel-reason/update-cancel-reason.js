/**
 * @swagger
 * /cancel-reason/:id:
 *   put:
 *     tags:
 *       - Vxr Cancel Ticket Reason
 *     summary: "Update cancel ticket reason"
 *     description: Update cancel ticket reason
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: id
 *         type: integer
 *         in: path
 *         required: true
 *         description: id
 *       - name: status
 *         type: integer
 *         in: formData
 *         required: true
 *         description: Status
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
 *                        cancel_ticket_reason_updated:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                            booking_code:
 *                              type: string
 *                            cancel_reason:
 *                              type: string
 *                            vxr_reason_cancel_ticket_id:
 *                              type: integer
 *                            status:
 *                              type: integer
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                    "cancel_ticket_reason_updated": {
 *                      "id": 1,
 *                      "booking_code": "ABC1234",
 *                      "vxr_reason_cancel_ticket_id": 5,
 *                      "cancel_reason": "Test",
 *                      "status": 0
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

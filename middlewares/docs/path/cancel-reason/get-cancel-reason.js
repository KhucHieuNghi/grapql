/**
 * @swagger
 * /cancel-reason:
 *   get:
 *     tags:
 *       - Vxr Cancel Ticket Reason
 *     summary: "Lấy form survey"
 *     description: Lấy form cancel ticket reason
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
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
 *                          survey:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  id: integer
 *                                  label: string
 *                                  label_english: string
 *                                  status: integer
 *                                  priority: integer
 *                                  created_at: timestamp
 *                                  updated_at: timestamp
 *
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                    "cancel_ticket_form": [
 *                      {
 *                        "id": 1,
 *                        "label": "ABC",
 *                        "label_english": "ABC",
 *                        "status": 1,
 *                        "priority": 1,
 *                      }
 *                    ]
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
 */

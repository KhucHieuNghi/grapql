/**
 * @swagger
 * /survey/:id:
 *   put:
 *     tags:
 *       - Vxr Survey
 *     summary: "Update survey"
 *     description: Update survey
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: id
 *         type: integer
 *         in: path
 *         required: true
 *         description: Mã survey id
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
 *                        survey_updated:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                            booking_code:
 *                              type: string
 *                            survey_value:
 *                              type: integer
 *                            detail_review:
 *                              type: string
 *                            vxr_survey_dimension_id:
 *                              type: integer
 *                            status:
 *                              type: integer
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                    "survey_updated": {
 *                      "id": 1,
 *                      "booking_code": "ABC1234",
 *                      "vxr_survey_dimension_id": 5,
 *                      "survey_value": 5,
 *                      "detail_review": "Test",
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

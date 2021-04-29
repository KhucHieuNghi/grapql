/**
 * @swagger
 * /survey:
 *   post:
 *     tags:
 *       - Vxr Survey
 *     summary: "Submit survey"
 *     description: Submit survey
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: bookingCode
 *         type: integer
 *         in: formData
 *         required: true
 *         description: Mã booking code
 *       - name: value
 *         type: integer
 *         in: formData
 *         required: true
 *         description: Value survey
 *       - name: comment
 *         type: string
 *         in: formData
 *         required: false
 *       - name: dimensionId
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
 *                        survey_submit:
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
 *                    "survey_submit": {
 *                      "id": 1,
 *                      "booking_code": "ABC1234",
 *                      "vxr_survey_dimension_id": 5,
 *                      "survey_value": 5,
 *                      "detail_review": "Test",
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

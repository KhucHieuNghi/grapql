/**
 * @swagger
 * /company/{compId}:
 *   get:
 *     tags:
 *       - Rating And Reviews
 *     summary: "Tính trung bình rating + company info"
 *     description: Tính trung bình rating + company info
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: compId
 *         type: integer
 *         in: path
 *         required: true
 *         description: Mã công ty
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
 *                        overall:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                            comp_id:
 *                              type: integer
 *                            rv_main_name:
 *                              type: string
 *                            rv_main_value:
 *                              type: string
 *                            label:
 *                              type: string
 *                            label_english:
 *                              type: string
 *                            count:
 *                              type: integer
 *                        rating:
 *                          type: array
 *                        company_info:
 *                          type: object
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                      "overall": {
 *                        "id": "3056",
 *                        "comp_id": 20717,
 *                        "rv_main_name": "overall",
 *                        "rv_main_value": "4.5",
 *                        "label": "Mức độ hài lòng của bạn với nhà xe",
 *                        "label_english": "Rate the overall experience of your recent trip",
 *                        "count": 117
 *                      },
 *                      "rating": [{
 *                        "id": "3055",
 *                        "comp_id": 20717,
 *                        "rv_main_name": "amenity",
 *                        "rv_main_value": "4.6",
 *                        "label": "Tiện ích",
 *                        "label_english": "Amenities",
 *                        "count": 117
 *                      }],
 *                      "company_info": {}
 *                   }
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

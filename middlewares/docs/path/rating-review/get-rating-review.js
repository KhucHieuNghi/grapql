/**
 * @swagger
 * /rating-review:
 *   get:
 *     tags:
 *       - Rating And Reviews
 *     summary: "Lấy danh sách rating and reviews"
 *     description: Lấy danh sách rating and reviews
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
 *                  page:
 *                      type: integer
 *                  total_pages:
 *                      type: integer
 *                  total:
 *                      type: integer
 *                  items:
 *                      type: object
 *                      properties:
 *                          label:
 *                            type: string
 *                          label_english:
 *                            type: string
 *                          priority:
 *                            type: integer
 *                          main_rv_dimension:
 *                            type: object
 *                            properties:
 *                              overall:
 *                                type: object
 *                                properties:
 *                                  label:
 *                                    type: string
 *                                  label_english:
 *                                    type: string
 *                                  label_sub:
 *                                    type: string
 *                                  label_sub_english:
 *                                    type: string
 *                                  priority:
 *                                    type: interger
 *
 *                              quality_overall:
 *                                type: object
 *
 *
 *              example:
 *                  "page": 1,
 *                  "total_pages": 1,
 *                  "total": 1,
 *                  "items": {
 *                    "1": {
 *                      "label": "Chuyến đi của bạn thế nào?",
 *                      "label_english": "How was your trip?",
 *                      "priority": 1,
 *                      "main_rv_dimension": {
 *                        "overall": {
 *                          "label": "Mức độ hài lòng của bạn với nhà xe",
 *                          "label_english": "Rate the overall experience of your recent trip",
 *                          "label_sub": null,
 *                          "label_sub_english": null,
 *                          "priority": 1,
 *                          "required": true,
 *                          "sub_required": null,
 *                          "ui_type": "single_choice_star",
 *                          "alway_show_sub": false,
 *                          "sub_rv_dimension": {}
 *                        }
 *                      }
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
 */

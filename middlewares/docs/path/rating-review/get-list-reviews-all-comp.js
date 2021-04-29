/**
 * @swagger
 * /company/reviews:
 *   get:
 *     tags:
 *       - Rating And Reviews
 *     summary: "Lấy danh sách reviews của tất cả company"
 *     description: Lấy danh sách reviews của tất cả company
 *     produces:
 *       - application/json
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: company
 *         type: integer
 *         in: path
 *         required: false
 *         description: Mã công ty
 *       - name: status
 *         type: integer
 *         in: path
 *         required: false
 *         description:
 *              1- Chờ duyệt
 *              2- Đã duyệt
 *              3- Từ chối
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
 *                        id:
 *                          type: integer
 *                        status:
 *                          type: integer
 *                        trip_id:
 *                          type: integer
 *                        trip_name:
 *                          type: string
 *                        comp_id:
 *                          type: integer
 *                        comment:
 *                          type: string
 *                        booking_code:
 *                          type: string
 *                        reason:
 *                          type: string
 *                        rating:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                            user_review_id:
 *                              type: integer
 *                            main_review_name:
 *                              type: string
 *                            main_review_value:
 *                              type: string
 *                            RvSubs:
 *                               type: array
 *                        rv_main:
 *                          type: array
 *
 *              example:
 *                  "message": "Success"
 *                  "data": {
 *                      "page": 1,
 *                      "page_size": 20,
 *                      "total_pages": 32,
 *                      "total": 631,
 *                      items: [{
 *                        "id": 1,
 *                        "status": 3,
 *                        "trip_id": 2655914,
 *                        "trip_name": "Sài Gòn - Đà Lạt",
 *                        "name": "Tien Test",
 *                        "comp_id": 23195,
 *                        "comment": "TN",
 *                        "booking_code": "9W37TMI",
 *                        "reason": "Sự cố VXR đã xử lý",
 *                        "rating": {
 *                          "id": 47284,
 *                          "user_review_id": 1058,
 *                          "main_review_name": "overall",
 *                          "main_review_value": "3",
 *                          "RvSubs": []
 *                        },
 *                        rv_main: [{
 *                          "id": 1,
 *                          "user_review_id": 1058,
 *                          "main_review_name": "amenity",
 *                          "main_review_value": "3",
 *                          "label": "Tiện ích",
 *                          "label_english": "Amenities",
 *                          "rv_sub": []
 *                        }]
 *                      }]
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
 */

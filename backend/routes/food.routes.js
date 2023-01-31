import { Router } from 'express'
import { getAllFoods, createFood, getFoodById } from '../controllers/food.controller.js';

const router = Router()
/**
 * @openapi
 * '/api/v1/foods':
 *  get:
 *     tags:
 *     - Foods
 *     summary: Get a list of all foods
 *     parameters:
 *      - name: startIndex
 *        in: query
 *        description: The starting index for pagination
 *        required: false
 *      - name: limit
 *        in: query
 *        description: The number of items per page
 *        required: false
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: object
 *              properties:
 *                count:
 *                  type: integer
 *                  description: The total number of foods
 *                results:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Food'
 *
 *  post:
 *     tags:
 *     - Foods
 *     summary: Create a new food
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *           $ref: '#/components/schemas/Food'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Food'
 *
 * '/api/v1/foods/{id}':
 *  get:
 *     tags:
 *     - Foods
 *     summary: Get a single food by the foodId
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the food
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Food'
 *       404:
 *         description: Food not found
 */



router.route('/')
  .get(getAllFoods)
  .post(createFood);
router.post("/:id", getFoodById)

export default router



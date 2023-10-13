import { Injectable } from '@nestjs/common';
import { ReviewImageDto } from '@review/dto/add-img-to-review.dto';
import { ReviewCreateDto } from '@review/dto/create-user-review.dto';
import { ReviewUpdateDto } from '@review/dto/update-user-review.dto';

@Injectable()
export class UserReviewService {
  /**
   * Получение коммментария к товару
   * @param id {string} review identifier
   * @returns Promise<void>
   */
  getReviewById(id: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * Получение все коммментариев пользователя
   * @param userId {string} review identifier
   * @returns Promise<void>
   */
  getReviewsByUser(userId: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * Создание комментария
   * @param userId {string} owner identifier
   * @param id {string} order identifier
   * @param  data: ReviewUpdateDto,
   * @returns Promise<void>
   */
  createReview(userId: string, data: ReviewCreateDto) {
    throw new Error('Method not implemented.');
  }
  /**
   * Изменение аттрибутов комментария
   * @param userId {string} owner identifier
   * @param id {string} order identifier
   * @param  data: ReviewUpdateDto,
   * @returns Promise<void>
   */
  updateReview(userId: string, id: string, data: ReviewUpdateDto) {
    throw new Error('Method not implemented.');
  }
  /**
   * Удаление комментария
   * @param userId {string} owner identifier
   * @param id {string} review identifier
   * @returns Promise<void>
   */
  deleteReview(_id: string, id: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * Получение комментриев по рейтингу 1 | 2 | 3 | 4| 5
   * @param userId {string} owner identifier
   * @param value {number} review identifier
   * @returns Promise<void>
   */
  getReviewByRating(id: string, value: number) {
    throw new Error('Method not implemented.');
  }

  /**
   * Добавление id изображения в список изображений комментария
   * @param  data: ReviewImageDto,
   * @returns Promise<void>
   */
  addImg2Review(data: ReviewImageDto) {
    throw new Error('Method not implemented.');
  }
}

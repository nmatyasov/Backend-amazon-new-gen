import { Injectable } from '@nestjs/common';
import { CheckOutDto } from 'src/payment/dto/checkout.dto';
import { CardUpdateDto } from 'src/payment/dto/update-card.dto';

@Injectable()
export class PaymentService {
  /**
   * Список всех карт пользователя
   * @param userId {string} owner identifier
   * @returns Promise<void>
   */
  getCardsAll(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Карта пользователя
   * @param userId {string} owner identifier
   * @param id {string} card identifier
   * @returns Promise<void>
   */
  getCardById(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Создание заказа
   * @param userId {string} owner identifier
   * @param  data: CardCreateDto,
   * @returns Promise<void>
   */
  createCard(userId: string, data: CardCreateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Изменение аттрибутов карты
   * @param userId {string} owner identifier
   * @param id {string} card identifier
   * @param  data: CardUpdateDto,
   * @returns Promise<void>
   */
  updateCard(userId: string, id: string, data: CardUpdateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Удаление карты
   * @param userId {string} owner identifier
   * @param id {string} card identifier
   * @returns Promise<void>
   */
  deleteCard(userId: string, id: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * Изменение аттрибутов карты
   * @param userId {string} owner identifier
   * @param  data: CheckOutDto,
   * @returns Promise<void>
   */
  checkOut(userId: string, data: CheckOutDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * установка основного платежного метода
   * @param userId {string} owner identifier
   * @param id {string} address identifier
   * @returns Promise<void>
   */
  setDefaultPaymentMethod(_id: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

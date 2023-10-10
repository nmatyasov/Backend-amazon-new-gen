import { Injectable } from '@nestjs/common';
import { AddProductLineDto } from '@order/dto/add-product-line.dto';
import { OrderCreateDto } from '@order/dto/create-order.dto';
import { OrderUpdateDto } from '@order/dto/update-order.dto';

@Injectable()
export class OrderService {
  updateProductLine(_id: string, id: string, lineid: string, data: OrderUpdateDto) {
    throw new Error('Method not implemented.');
  }
  /**
   * Список всех заказов пользователя
   * @param userId {string} owner identifier
   * @returns Promise<void>
   */
  getOrdersAll(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Заказ пользователя
   * @param userId {string} owner identifier
   * @param id {string} order identifier
   * @returns Promise<void>
   */
  getOrderById(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Создание заказа
   * @param userId {string} owner identifier
   * @param  data: OrderCreateDto,
   * @returns Promise<void>
   */
  createOrder(userId: string, data: OrderCreateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Изменение аттрибутов заказа
   * @param userId {string} owner identifier
   * @param id {string} order identifier
   * @param  data: OrderUpdateDto,
   * @returns Promise<void>
   */
  updateOrder(userId: string, id: string, data: OrderUpdateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Удаление заказа только отменный и не оплаченный
   * @param userId {string} owner identifier
   * @param id {string} cart identifier
   * @returns Promise<void>
   */
  deleteOrder(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Добавление товара в заказ, если заказа не существует будет создан новый
   * @param userId {string} owner identifier
   * @param  data: AddProductLineDto,
   * @returns Promise<void>
   */
  addProductLine(userId: string, data: AddProductLineDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

}

import { CartCreateDto } from '@cart/dto/create-cart.dto';
import { ProductItemDto } from '@cart/dto/transfer-product-to-order.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  /**
   * Список всех продуктовых корзин пользователя
   * @param userId {string} owner identifier
   * @returns Promise<void>
   */
  getAllCartByUser(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Продуктовая корзина пользователя
   * @param userId {string} owner identifier
   * @param id {string} cart identifier
   * @returns Promise<void>
   */
  getCartById(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Изменение количества товара
   * @param userId {string} owner identifier
   * @param id {string} cart identifier
   * @param qty {number} количество товара
   * @returns Promise<void>
   */
  updateCartProductQuantity(
    userId: string,
    id: string,
    productitemid: string,
    qty: number,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Создание продуктовой корзины
   * @param userId {string} owner identifier
   * @param  data: CartCreateDto,
   * @returns Promise<void>
   */
  createCart(userId: string, data: CartCreateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Изменение атрибутов продуктовой корзины
   * @param userId {string} owner identifier
   * @returns Promise<void>
   */
  updateCart(userId: string, data: CartCreateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Удаление товара из корзины
   * @param userId {string} owner identifier
   * @param  productitemid {string},
   * @returns Promise<void>
   */
  deleteProducItem(
    userId: string,
    id: string,
    productitemid: string,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Удаление товара из корзины
   * @param userId {string} owner identifier
   * @param  id: {string} cart identifier,
   * @returns Promise<void>
   */
  deleteCart(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Удаление товаров из корзины
   * @param userId {string} owner identifier
   * @param  id: {string} cart identifier,
   * @returns Promise<void>
   */
  clearCart(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Перенос товаров из корзины в заказ
   * @param userId {string} owner identifier
   * @param  data: {ProductItemDto[]} list product items with qty,
   * @returns Promise<void>
   */
  addProductItem2Order(_id: string, data: ProductItemDto[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

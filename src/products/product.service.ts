import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  /**
   * Получение все коммментариев пользователя
   * @param offset {number} offset
   * @param limit {number} limit
   * @param idsToSkip: identificator,
   * @returns Promise<void>
   */
  getAllProducts(
    offset: number,
    limit: number,
    idsToSkip: string,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Получение карточки товара
   * @param id {string} product identifier
   * @returns Promise<void>
   */
  getProductById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Получение всей продукции бренда
   * @param offset {number} offset
   * @param limit {number} limit
   * @param idsToSkip: identificator,
   * @returns Promise<void>
   */
  getProductsByBrand(
    brandId: string,
    offset: number,
    limit: number,
    idsToSkip: string,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Получение всей продукции по категории
   * @param offset {number} offset
   * @param limit {number} limit
   * @param idsToSkip: identificator,
   * @returns Promise<void>
   */
  getProductsByCategory(
    categoryId: string,
    offset: number,
    limit: number,
    idsToSkip: string,
  ) {
    throw new Error('Method not implemented.');
  }

  /**
   * Получение списка брендов с количестовом товаров
   * @param offset {number} offset
   * @param limit {number} limit
   * @param idsToSkip: identificator,
   * @returns Promise<void>
   */
  getBrandsAllAndCount(
    offset: number,
    limit: number,
    idsToSkip: string,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Получение списка категорий с количестовом товаров
   * @param offset {number} offset
   * @param limit {number} limit
   * @param idsToSkip: identificator,
   * @returns Promise<void>
   */
  getGetCategoriesAllAndCount(
    offset: number,
    limit: number,
    idsToSkip: string,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

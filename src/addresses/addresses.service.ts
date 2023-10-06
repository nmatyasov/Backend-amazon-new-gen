import { AddressUpsertDto } from '@addresses/dto/upsert-address.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressesService {
  /**
   * Создание адреса пользователя
   * @param userId {string} owner identifier
   * @param data {AddressUpsertDto} address
   * @returns Promise<void>
   */
  createAddress(userId: string, data: AddressUpsertDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Изменение адреса пользователя
   * @param userId {string} owner identifier
   * @param id {string} address identifier
   * @param data {AddressUpsertDto} address
   * @returns Promise<void>
   */
  editAddress(
    userId: string,
    id: string,
    data: AddressUpsertDto,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Получение адреса пользователя
   * @param userId {string} owner identifier
   * @param id {string} address identifier
   * @returns Promise<void>
   */
  getAddressById(userId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Получение всех адресов пользователя
   * @param userId {string} owner identifier
   * @returns Promise<void>
   */
  getUserAddresses(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * проверка корректности адреса пользователя
   * @param userId {string} owner identifier
   * @param id {string} address identifier
   * @returns Promise<void>
   */
  validateAddress(userId: string, id: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * установка основного адреса пользователя
   * @param userId {string} owner identifier
   * @param id {string} address identifier
   * @returns Promise<void>
   */
  setDefaultAddress(userId: string, id: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * удаление адреса пользователя
   * @param userId {string} owner identifier
   * @param id {string} address identifier
   * @returns Promise<void>
   */
  deleteAddress(userId: string, id: string) {
    throw new Error('Method not implemented.');
  }
}

import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressRepository } from '@addresses/repository/address.repository';
import { UserAddressRepository } from '@addresses/repository/user_address-rel.repository';
import { CountryRepository } from '@addresses/repository/country.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AddressRepository,
      UserAddressRepository,
      CountryRepository,
    ]),
  ],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}

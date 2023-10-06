import JwtAuthenticationGuard from '@auth/guards/jwt-authentication.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AddressesService } from './addresses.service';
import { GetUser } from '@auth/get-user.decorator';
import { UserDto } from '@users/dto/user.dto';
import { AddressUpsertDto } from '@addresses/dto/upsert-address.dto';

@ApiTags('Address')
@Controller('address')
export class AddressesController {
  constructor(private readonly addressService: AddressesService) {}

  @ApiOperation({
    summary: 'Get user addresses',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Get('getUserAddresses')
  async getUserAddresses(@GetUser() user: UserDto) {
    return await this.addressService.getUserAddresses(user._id);
  }

  @ApiOperation({
    summary: 'Get user address by Id',
  })
  @ApiParam({ name: 'id', required: true, description: 'Address identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Get(':id')
  async getAddressById(@GetUser() user: UserDto, @Param() id: string) {
    return await this.addressService.getAddressById(user._id, id);
  }

  @ApiOperation({
    summary: 'Create user address',
  })
  @ApiBody({
    type: AddressUpsertDto,
    description:
      'The Description for the Address Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    /*TODO добавить пример */
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Post('create')
  async createAddress(
    @GetUser() user: UserDto,
    @Body() data: AddressUpsertDto,
  ) {
    return await this.addressService.createAddress(user._id, data);
  }

  @ApiOperation({
    summary: 'Edit user address',
  })
  @ApiParam({ name: 'id', required: true, description: 'Address identifier' })
  @ApiBody({
    type: AddressUpsertDto,
    description:
      'The Description for the Address Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    /*TODO добавить пример */
    /* examples: {
        a: {
            summary: "Empty Body",
            description: "Description for when an empty body is used",
            value: {} as AddressUpsertDto
        },
        b: {
            summary: "Hello Body",
            description: "Hello is used as the greeting",
            value: {greeting: "Hello"} as AddressUpsertDto
        }
    } */
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Patch('edit/:id')
  async editAddress(
    @GetUser() user: UserDto,
    @Param() id: string,
    @Body() data: AddressUpsertDto,
  ) {
    return await this.addressService.editAddress(user._id, id, data);
  }

  @ApiOperation({
    summary: 'Validate user address',
  })
  @ApiParam({ name: 'id', required: true, description: 'Address identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Patch('validate/:id')
  async validateAddress(@GetUser() user: UserDto, @Param() id: string) {
    return await this.addressService.validateAddress(user._id, id);
  }

  @ApiOperation({
    summary: 'Set default user address',
  })
  @ApiParam({ name: 'id', required: true, description: 'Address identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Patch('setdefault/:id')
  async setDefaultAddress(@GetUser() user: UserDto, @Param() id: string) {
    return await this.addressService.setDefaultAddress(user._id, id);
  }

  @ApiOperation({
    summary: 'Delete user address',
  })
  @ApiParam({ name: 'id', required: true, description: 'Address identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseGuards(JwtAuthenticationGuard)
  @Delete(':id')
  async deleteAddress(@GetUser() user: UserDto, @Param() id: string) {
    return await this.addressService.deleteAddress(user._id, id);
  }
}

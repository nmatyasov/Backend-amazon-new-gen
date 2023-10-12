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

import { GetUser } from '@auth/get-user.decorator';
import { UserDto } from '@users/dto/user.dto';
import JwtAuthenticationGuard from '@auth/guards/jwt-authentication.guard';
import { PaymentService } from './payment.service';
import { CardCreateDto } from './dto/create-card.dto';
import { CardUpdateDto } from './dto/update-card.dto';
import { CheckOutDto } from './dto/checkout.dto';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation({
    summary: 'Get user cards',
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
  @Get('getusercards')
  async getCardsAll(@GetUser() user: UserDto) {
    return await this.paymentService.getCardsAll(user._id);
  }

  @ApiOperation({
    summary: 'Get card',
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
  @Get(':id')
  async getCardById(@GetUser() user: UserDto, @Param() id: string) {
    return await this.paymentService.getCardById(user._id, id);
  }

  @ApiOperation({
    summary: 'Create card',
  })
  @ApiBody({
    type: CardCreateDto,
    description:
      'The Description for the Card Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
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
  @Post('create')
  async createOrder(@GetUser() user: UserDto, @Body() data: CardCreateDto) {
    return await this.paymentService.createCard(user._id, data);
  }

  @ApiOperation({
    summary: 'Edit card attributes',
  })
  @ApiParam({ name: 'id', required: true, description: 'Card identifier' })
  @ApiBody({
    type: CardUpdateDto,
    description:
      'The Description for the Order Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
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
  async updateOrder(
    @GetUser() user: UserDto,
    @Param() id: string,
    @Body() data: CardUpdateDto,
  ) {
    return await this.paymentService.updateCard(user._id, id, data);
  }

  @ApiOperation({
    summary: 'Delete card',
  })
  @ApiParam({ name: 'id', required: true, description: 'Order identifier' })
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
  async deleteOrder(@GetUser() user: UserDto, @Param() id: string) {
    return await this.paymentService.deleteCard(user._id, id);
  }

  @ApiOperation({
    summary: 'Checkout order',
  })
  @ApiBody({
    type: CheckOutDto,
    description:
      'The Description for the Card Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
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
  @Post('checkout')
  async checkOut(@GetUser() user: UserDto, @Body() data: CheckOutDto) {
    return await this.paymentService.checkOut(user._id, data);
  }

  @ApiOperation({
    summary: 'Set default payment method',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Default payment method identifier',
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
  @Patch('setdefault/:id')
  async setDefaultPaymentMethod(@GetUser() user: UserDto, @Param() id: string) {
    return await this.paymentService.setDefaultPaymentMethod(user._id, id);
  }
}

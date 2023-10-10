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
import { OrderService } from '@order/order.service';
import { OrderCreateDto } from '@order/dto/create-order.dto';
import { OrderUpdateDto } from '@order/dto/update-order.dto';
import { AddProductLineDto } from '@order/dto/add-product-line.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({
    summary: 'Get user orders',
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
  @Get('getOrdersAll')
  async getOrdersAll(@GetUser() user: UserDto) {
    return await this.orderService.getOrdersAll(user._id);
  }

  @ApiOperation({
    summary: 'Get order',
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
  async getOrderById(@GetUser() user: UserDto, @Param() id: string) {
    return await this.orderService.getOrderById(user._id, id);
  }

  @ApiOperation({
    summary: 'Create order',
  })
  @ApiBody({
    type: OrderCreateDto,
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
  @Post('create')
  async createOrder(@GetUser() user: UserDto, @Body() data: OrderCreateDto) {
    return await this.orderService.createOrder(user._id, data);
  }

  @ApiOperation({
    summary: 'Edit order attributes',
  })
  @ApiParam({ name: 'id', required: true, description: 'Order identifier' })
  @ApiBody({
    type: OrderUpdateDto,
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
    @Body() data: OrderUpdateDto,
  ) {
    return await this.orderService.updateOrder(user._id, id, data);
  }

  @ApiOperation({
    summary: 'Add product line in order',
  })
  @ApiBody({
    type: AddProductLineDto,
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
  @Post('addproductline')
  async addProductLine(
    @GetUser() user: UserDto,
    @Body() data: AddProductLineDto,
  ) {
    return await this.orderService.addProductLine(user._id, data);
  }

  @ApiOperation({
    summary: 'Delete order',
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
    return await this.orderService.deleteOrder(user._id, id);
  }

  @ApiOperation({
    summary: 'Edit order attributes',
  })
  @ApiParam({ name: 'id', required: true, description: 'Order identifier' })
  @ApiParam({
    name: 'lineid',
    required: true,
    description: 'Product Item identifier',
  })
  @ApiBody({
    type: AddProductLineDto,
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
  @Patch('edit/:id/productline/:lineid')
  async updateProductLile(
    @GetUser() user: UserDto,
    @Param() id: string,
    @Param() lineid: string,
    @Body() data: OrderUpdateDto,
  ) {
    return await this.orderService.updateProductLine(
      user._id,
      id,
      lineid,
      data,
    );
  }
}

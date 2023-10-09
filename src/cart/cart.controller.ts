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
import { CartService } from './cart.service';
import JwtAuthenticationGuard from '@auth/guards/jwt-authentication.guard';
import { GetUser } from '@auth/get-user.decorator';
import { UserDto } from '@users/dto/user.dto';
import { CartCreateDto } from '@cart/dto/create-cart.dto';
import { ProductItemDto } from '@cart/dto/transfer-product-to-order.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({
    summary: 'Create user cart',
  })
  @ApiBody({
    type: CartCreateDto,
    description:
      'The Description for the Cart Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    /*TODO добавить пример */
    /* examples: {
        a: {
            summary: "Empty Body",
            description: "Description for when an empty body is used",
            value: {} as CartCreateDto
        },
        b: {
            summary: "Hello Body",
            description: "Hello is used as the greeting",
            value: {greeting: "Hello"} as CartCreateDto
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
  async createCart(@GetUser() user: UserDto, @Body() data: CartCreateDto) {
    return await this.cartService.createCart(user._id, data);
  }

  @ApiOperation({
    summary: 'Update user cart',
  })
  @ApiBody({
    type: CartCreateDto,
    description:
      'The Description for the Cart Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    /*TODO добавить пример */
    /* examples: {
        a: {
            summary: "Empty Body",
            description: "Description for when an empty body is used",
            value: {} as CartCreateDto
        },
        b: {
            summary: "Hello Body",
            description: "Hello is used as the greeting",
            value: {greeting: "Hello"} as CartCreateDto
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
  @Patch(':id')
  async updateCart(@GetUser() user: UserDto, @Body() data: CartCreateDto) {
    return await this.cartService.createCart(user._id, data);
  }

  @ApiOperation({
    summary: 'Get all user cart',
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
  @Get()
  async getAllCartByUser(@GetUser() user: UserDto) {
    return await this.cartService.getAllCartByUser(user._id);
  }

  @ApiOperation({
    summary: 'Get user cart',
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
  async getCartById(@GetUser() user: UserDto, @Param() id: string) {
    return await this.cartService.getCartById(user._id, id);
  }

  @ApiOperation({
    summary: 'Change the quantity of goods in the cart',
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
  @Post(':id/product_item/:productitemid/update-quantity/:qnt')
  async updateCartProductQuantity(
    @GetUser() user: UserDto,
    @Param() id: string,
    @Param() productitemid: string,
    @Param() qnt: number,
  ) {
    return await this.cartService.updateCartProductQuantity(
      user._id,
      id,
      productitemid,
      qnt,
    );
  }

  @ApiOperation({
    summary: 'Remove item from cart',
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
  @Post(':id/product_item/:productitemid/delete')
  async deleteCartProduct(
    @GetUser() user: UserDto,
    @Param() id: string,
    @Param() productitemid: string,
  ) {
    return await this.cartService.deleteProducItem(user._id, id, productitemid);
  }

  @ApiOperation({
    summary: 'Clear cart',
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
  @Post(':id/clear')
  async clearCart(@GetUser() user: UserDto, @Param() id: string) {
    return await this.cartService.clearCart(user._id, id);
  }

  @ApiOperation({
    summary: 'Transfer products to order',
  })
  @ApiParam({ name: 'id', required: true, description: 'Address identifier' })
  @ApiBody({
    type: ProductItemDto,
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
  @Post('addproductitem2order')
  async addProductItem2Order(
    @GetUser() user: UserDto,
    @Body() data: ProductItemDto[],
  ) {
    return await this.cartService.addProductItem2Order(user._id, data);
  }

  @ApiOperation({
    summary: 'Remove cart',
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
  @Delete(':id')
  async deleteCart(@GetUser() user: UserDto, @Param() id: string) {
    return await this.cartService.deleteCart(user._id, id);
  }
}

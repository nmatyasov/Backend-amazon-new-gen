import { PaginationParams } from '@app/lib/src/dtos/pagination-params.dto';
import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductService } from '@product/product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @ApiOperation({
    summary: 'Get all categories',
  })
  @ApiQuery({
    name: 'PaginationParams',
    required: false,
    description: 'Pagination params',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get('getcategoriesall')
  async getCategoriesAll(
    @Query() { offset, limit, idsToSkip }: PaginationParams,
  ) {
    return await this.productsService.getGetCategoriesAllAndCount(
      offset,
      limit,
      idsToSkip,
    );
  }
  @ApiOperation({
    summary: 'Get all brands',
  })
  @ApiQuery({
    name: 'PaginationParams',
    required: false,
    description: 'Pagination params',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get('getbrandsall')
  async getBrandsAll(@Query() { offset, limit, idsToSkip }: PaginationParams) {
    return await this.productsService.getBrandsAllAndCount(
      offset,
      limit,
      idsToSkip,
    );
  }

  @ApiOperation({
    summary: 'Get products by category',
  })
  @ApiQuery({
    name: 'categoryId',
    required: true,
    description: 'Category identificator',
  })
  @ApiQuery({
    name: 'PaginationParams',
    required: false,
    description: 'Pagination params',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get('getproductsbycategory')
  async getProductsByCategory(
    @Query() categoryId: string,
    @Query() { offset, limit, idsToSkip }: PaginationParams,
  ) {
    return await this.productsService.getProductsByCategory(
      categoryId,
      offset,
      limit,
      idsToSkip,
    );
  }
  @ApiOperation({
    summary: 'Get products by brand',
  })
  @ApiQuery({
    name: 'brandId',
    required: true,
    description: 'Category identificator',
  })
  @ApiQuery({
    name: 'PaginationParams',
    required: false,
    description: 'Pagination params',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get('getproductsbycategory')
  async getProductsByBrand(
    @Query() brandId: string,
    @Query() { offset, limit, idsToSkip }: PaginationParams,
  ) {
    return await this.productsService.getProductsByBrand(
      brandId,
      offset,
      limit,
      idsToSkip,
    );
  }

  @ApiOperation({
    summary: 'Get product',
  })
  @ApiParam({ name: 'id', required: true, description: 'product identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get(':id')
  async getProductById(@Param() id: string) {
    return await this.productsService.getProductById(id);
  }
  @ApiOperation({
    summary: 'Get all products',
  })
  @ApiQuery({
    name: 'PaginationParams',
    required: false,
    description: 'Pagination params',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get()
  async getAllProducts(
    @Query() { offset, limit, idsToSkip }: PaginationParams,
  ) {
    return await this.productsService.getAllProducts(offset, limit, idsToSkip);
  }
}

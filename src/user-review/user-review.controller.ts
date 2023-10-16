import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { GetUser } from '@auth/get-user.decorator';
import { UserDto } from '@users/dto/user.dto';
import JwtAuthenticationGuard from '@auth/guards/jwt-authentication.guard';
import { UserReviewService } from '@review/user-review.service';
import { ReviewCreateDto } from '@review/dto/create-user-review.dto';
import { ReviewUpdateDto } from '@review/dto/update-user-review.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '@app/lib/src/config/mutler.config';
import { SharpPipe } from '@app/lib';
import { ReviewImageDto } from '@review/dto/add-img-to-review.dto';
import { SimpleDto } from '@app/lib/src/dtos/simple.dto';

@ApiTags('User Review')
@Controller('user-reviews')
export class UserReviewController {
  constructor(private readonly userreviewService: UserReviewService) {}

  @ApiOperation({
    summary: 'Get review',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @Get(':id')
  async getReviewById(@Param() id: string) {
    return await this.userreviewService.getReviewById(id);
  }

  @ApiOperation({
    summary: 'Get all user reviews',
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
  @Get('userreviews')
  async getReviewsByUser(@GetUser() user: UserDto) {
    return await this.userreviewService.getReviewsByUser(user._id);
  }

  @ApiOperation({
    summary: 'Create review',
  })
  @ApiBody({
    type: ReviewCreateDto,
    description:
      'The Description for the Review Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
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
  async createOrder(@GetUser() user: UserDto, @Body() data: ReviewCreateDto) {
    return await this.userreviewService.createReview(user._id, data);
  }

  @ApiOperation({
    summary: 'Update review',
  })
  @ApiParam({ name: 'id', required: true, description: 'Review identifier' })
  @ApiBody({
    type: ReviewUpdateDto,
    description:
      'The Description for the Review Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
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
  @Patch(':id')
  async updateReview(
    @GetUser() user: UserDto,
    @Param() id: string,
    data: ReviewUpdateDto,
  ) {
    return await this.userreviewService.updateReview(user._id, id, data);
  }

  @ApiOperation({
    summary: 'Delete review',
  })
  @ApiParam({ name: 'id', required: true, description: 'Review identifier' })
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
    return await this.userreviewService.deleteReview(user._id, id);
  }

  @ApiOperation({
    summary: 'Get review by rating',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Product item identifier',
  })
  @ApiQuery({ name: 'value', required: true, description: 'Score' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    /*TODO добавить тип response */
    //type: ,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  async getReviewByRating(
    @Param() id: string,
    @Query('value', ParseIntPipe) value: number,
  ) {
    return await this.userreviewService.getReviewByRating(id, value);
  }

  @ApiOperation({
    summary: 'Upload single file',
  })
  @ApiBody({
    type: SimpleDto,
    description:
      'The identificator for the Review Img Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
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
  @Post('upload')
  @UseGuards(JwtAuthenticationGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerOptions.storage,
      fileFilter: multerOptions.fileFilter,
    }),
  )
  async uploadFile(
    @Body() simpleDto: SimpleDto,
    @UploadedFile(SharpPipe) file: string,
  ) {
    await this.userreviewService.uploadFile(simpleDto.id, file);
    const result = {
      filename: file,
    };
    return {
      status: HttpStatus.OK,
      message: 'Image uploaded successfully!',
      data: result,
    };
  }
}

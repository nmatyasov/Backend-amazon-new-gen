import JwtAuthenticationGuard from '@auth/guards/jwt-authentication.guard';
import RequestWithUser from '@auth/requestWithUser.interface';
import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from '@users/users.service';

import { UsersEntity } from '@users/entites/users.entity';
import { multerOptions } from '@app/lib/src/config/mutler.config';
import { JwtPayload } from '@app/lib';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthenticationGuard)
  @Get('profile')
  @ApiExcludeEndpoint()
  getProfile(@Req() req: RequestWithUser) {
    return req.user;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post(':id/avatar')
  @ApiOperation({ summary: 'Upload user avatar' })
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id', required: true, description: 'User identifier' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return jwtPayload',
    // type: JwtPayload,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerOptions.storage,
      fileFilter: multerOptions.fileFilter,
    }),
  )
  async uploadAvatar(
    @Param() id: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UsersEntity> {
    return await this.usersService.setAvatar(id, file.filename);
  }
}

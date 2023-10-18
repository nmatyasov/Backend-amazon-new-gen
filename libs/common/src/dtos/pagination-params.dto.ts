import { IsNumber, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationParams {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset = 0;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit: number | null = null;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  idsToSkip: string;
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { UsersRepository, OrderRepository } from './database/repositories/index'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, TypeOrmModule.forFeature([UsersRepository, OrderRepository])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

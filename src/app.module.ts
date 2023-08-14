import { AppService } from './app.service'
import { BotController } from './bot.controller'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ResultController } from './result.controller'

@Module({
	imports: [],
	controllers: [BotController, ResultController],
	providers: [AppService, PrismaService],
})
export class AppModule {}

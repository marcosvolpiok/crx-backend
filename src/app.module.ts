import { BotController } from './bot.controller'
import { BotService } from './bot.service'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ResultController } from './result.controller'
import { ResultService } from './result.service'

@Module({
	imports: [],
	controllers: [BotController, ResultController],
	providers: [BotService, ResultService, PrismaService],
})
export class AppModule {}

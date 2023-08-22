import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common'

import { BotService } from './bot.service'
import { Search as SearchModel } from '@prisma/client'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'

class Bot {
	@ApiProperty({ type: String })
	label: string

	@ApiProperty({ type: String })
	type: string

	@ApiProperty({ type: String })
	rooms: string

	@ApiProperty({ type: Number, format: 'int64' })
	priceMax: number

	@ApiProperty({ type: Number, format: 'int64' })
	priceMin: number
}

@Controller()
export class BotController {
	constructor(private readonly botService: BotService) {}

	@ApiOkResponse({
		description: 'The bot records',
		type: Bot,
		isArray: true,
	})
	@Get('api/user/real-estate/bot')
	bot(): Promise<SearchModel[]> {
		return this.botService.bot()
	}

	@ApiOkResponse({
		description: 'The bot records',
		type: Bot,
	})
	@Get('api/user/real-estate/bot/:id')
	botById(@Param('id') id: string): Promise<SearchModel> {
		return this.botService.botById({ id: Number(id) })
	}

	@ApiOkResponse({
		description: 'The bot records',
		type: Bot,
	})
	@Delete('api/user/real-estate/bot/:id')
	delete(@Param('id') id: string): Promise<SearchModel> {
		return this.botService.delete({ id: Number(id) })
	}

	@ApiOkResponse({
		description: 'The bot records',
		type: Bot,
	})
	@Post('api/user/real-estate/bot/')
	create(
		@Body()
		bot: Bot
	): Promise<SearchModel> {
		return this.botService.create(bot)
	}
}

import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common'

import { BotService } from './bot.service'
import { Search as SearchModel } from '@prisma/client'

@Controller()
export class BotController {
	constructor(private readonly botService: BotService) {}

	@Get('api/user/real-estate/bot')
	bot(): Promise<SearchModel[]> {
		return this.botService.bot()
	}

	@Get('api/user/real-estate/bot/:id')
	botById(@Param('id') id: string): Promise<SearchModel> {
		return this.botService.botById({ id: Number(id) })
	}

	@Delete('api/user/real-estate/bot/:id')
	delete(@Param('id') id: string): Promise<SearchModel> {
		return this.botService.delete({ id: Number(id) })
	}

	@Post('api/user/real-estate/bot/')
	create(
		@Body()
		searchData: {
			priceMin: number
			priceMax: number
			rooms: string
			type: string
			label: string
		}
	): Promise<SearchModel> {
		return this.botService.create(searchData)
	}
}

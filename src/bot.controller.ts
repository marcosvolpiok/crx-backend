import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common'

import { BotService } from './bot.service'
import { Search as SearchModel } from '@prisma/client'

@Controller()
export class BotController {
	constructor(private readonly botService: BotService) {}

	@Get('api/user/real-estate/bot')
	getSearchAll(): Promise<SearchModel[]> {
		return this.botService.searchAll()
	}

	@Get('api/user/real-estate/bot/:id')
	getSearchById(@Param('id') id: string): Promise<SearchModel> {
		return this.botService.search({ id: Number(id) })
	}

	@Delete('api/user/real-estate/bot/:id')
	deleteSearchById(@Param('id') id: string): Promise<SearchModel> {
		return this.botService.delete({ id: Number(id) })
	}

	@Post('api/user/real-estate/bot/')
	createSearch(
		@Body()
		searchData: {
			priceMin: number
			priceMax: number
			rooms: string
			type: string
			label: string
		}
	): Promise<SearchModel> {
		return this.botService.createSearch(searchData)
	}
}

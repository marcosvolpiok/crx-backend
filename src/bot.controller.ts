import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common'

import { AppService } from './app.service'
import { Search as SearchModel } from '@prisma/client'

@Controller()
export class BotController {
	constructor(private readonly appService: AppService) {}

	@Get('api/user/real-estate/bot')
	getSearchAll(): Promise<SearchModel[]> {
		return this.appService.searchAll()
	}

	@Get('api/user/real-estate/bot/:id')
	getSearchById(@Param('id') id: string): Promise<SearchModel> {
		return this.appService.search({ id: Number(id) })
	}

	@Delete('api/user/real-estate/bot/:id')
	deleteSearchById(@Param('id') id: string): Promise<SearchModel> {
		return this.appService.delete({ id: Number(id) })
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
		return this.appService.createSearch(searchData)
	}
}

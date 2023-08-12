import { Controller, Get, Delete, Param, Body, Post, Put } from '@nestjs/common'

import { AppService } from './app.service'
import { Search as SearchModel, Result as ResultModel } from '@prisma/client'

@Controller()
export class AppController {
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

	@Get('api/user/real-estate/results/:botId')
	getResultsById(@Param('botId') id: string): Promise<ResultModel[]> {
		return this.appService.getResultsById({ id: Number(id) })
	}

	@Put('api/user/real-estate/results/:botId/:id')
	updateResultById(
		@Param('id') id: number,
		@Param('botId') bot_id: number,
		@Body('statusId') status_id: string
	): Promise<ResultModel> {
		return this.appService.updateResultById({
			id: Number(id),
			bot_id: Number(bot_id),
			status_id: String(status_id),
		})
	}

	@Post('api/user/real-estate/results')
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

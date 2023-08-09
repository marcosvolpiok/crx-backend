import { Controller, Get, Param, Body, Post } from '@nestjs/common'

import { AppService } from './app.service'
import { User as UserModel, Search as SearchModel } from '@prisma/client'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('search/:id')
	getSearchById(@Param('id') id: string): Promise<SearchModel> {
		return this.appService.search({ id: Number(id) })
	}

	@Post('search')
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

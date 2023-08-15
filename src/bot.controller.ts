import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common'

import { BotService } from './bot.service'
import { Search as SearchModel } from '@prisma/client'
import { ApiOkResponse, ApiParam } from '@nestjs/swagger'

class Bot {
	public name: string
	public id: number
	public priceMin: number
	public priceMax: number
	public rooms: number
	public label: number
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
	@ApiParam({
		name: 'priceMin',
		required: true,
		description: 'Minimum price',
		schema: {
			type: 'number',
		},
	})
	@ApiParam({
		name: 'priceMax',
		required: true,
		description: 'Maximum price',
		schema: {
			type: 'number',
		},
	})
	@ApiParam({
		name: 'rooms',
		required: true,
		description: 'Quantity of rooms',
		schema: {
			type: 'string',
		},
	})
	@ApiParam({
		name: 'type',
		required: true,
		description: 'type of flat',
		schema: {
			type: 'string',
		},
	})
	@ApiParam({
		name: 'label',
		required: true,
		description: 'label of the bot',
		schema: {
			type: 'string',
		},
	})
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

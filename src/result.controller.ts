import { Controller, Get, Param, Body, Put } from '@nestjs/common'

import { ResultService } from './result.service'
import { Result as ResultModel } from '@prisma/client'
import { ApiOkResponse, ApiParam } from '@nestjs/swagger'

class Result {
	public id: number
	public bot_id: number
	public url: string
	public title: string
	public price: number
	public price_history: string
	public status_id: string
	public address_line: string
	public neighborhood_name: string
	public totalArea: number
	public coveredArea: number
	public uncoveredArea: number
	public category: string
	public photoUrl: string
}

@Controller()
export class ResultController {
	constructor(private readonly resultService: ResultService) {}

	@ApiOkResponse({
		description: 'The result records',
		type: Result,
	})
	@Get('api/user/real-estate/results/:botId')
	resultByBotId(@Param('botId') id: string): Promise<ResultModel[]> {
		return this.resultService.resultByBotId({ id: Number(id) })
	}

	@ApiOkResponse({
		description: 'The result records',
		type: Result,
	})
	@ApiParam({
		name: 'statusId',
		required: true,
		description: 'New status Id',
		schema: {
			type: 'string',
		},
	})
	@Put('api/user/real-estate/results/:botId/:id')
	update(
		@Param('id') id: number,
		@Param('botId') bot_id: number,
		@Body('statusId') status_id: string
	): Promise<ResultModel> {
		return this.resultService.update({
			id: Number(id),
			bot_id: Number(bot_id),
			status_id: String(status_id),
		})
	}
}

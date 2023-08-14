import { Controller, Get, Param, Body, Put } from '@nestjs/common'

import { AppService } from './app.service'
import { Result as ResultModel } from '@prisma/client'

@Controller()
export class ResultController {
	constructor(private readonly appService: AppService) {}

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
}

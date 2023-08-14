import { Controller, Get, Param, Body, Put } from '@nestjs/common'

import { ResultService } from './result.service'
import { Result as ResultModel } from '@prisma/client'

@Controller()
export class ResultController {
	constructor(private readonly resultService: ResultService) {}

	@Get('api/user/real-estate/results/:botId')
	getResultsById(@Param('botId') id: string): Promise<ResultModel[]> {
		return this.resultService.getResultsById({ id: Number(id) })
	}

	@Put('api/user/real-estate/results/:botId/:id')
	updateResultById(
		@Param('id') id: number,
		@Param('botId') bot_id: number,
		@Body('statusId') status_id: string
	): Promise<ResultModel> {
		return this.resultService.updateResultById({
			id: Number(id),
			bot_id: Number(bot_id),
			status_id: String(status_id),
		})
	}
}
